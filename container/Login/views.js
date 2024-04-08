const { loginModel } = require("./model");
const otpGenerate = require("../../components/otpGenerate");
const checkEmailOrPhoneNumber = require("../../components/checkEmailOrPhoneNumber");
const { emailSend } = require("../../components/sendEmail");

const loginView = async (req, res) => {
  const { user } = req.body;
  if (!user) {
    return res
      .status(400)
      .json({ message: "user is required", success: false });
  }
  try {
    // Check if the user is an email or a phone number
    const valueType = await checkEmailOrPhoneNumber(user);

    if (valueType === "email" || valueType === "phone") {
      otp = otpGenerate(5);
      // Check if the email already exists in the database
      const existingUser = await loginModel.findOne({ user: user });
      if (existingUser) {
        // If the user already exists, update the OTP
        existingUser.otp = otp;
        await existingUser.save();
        if (valueType === "email") {
          await emailSend(user, "Your otp is", otp);
        }

        return res.status(200).json({
          message: "OTP sent successfully",
          success: true,
          otp: otp,
          user: user,
        });
      } else {
        // If the user doesn't exist, create a new entry with the generated OTP
        const newUser = new loginModel({ user: user, otp: otp });
        await newUser.save();
        if (valueType === "email") {
          await emailSend(user, "Your otp is", otp);
        }

        return res.status(201).json({
          message: "User added successfully",
          success: true,
          otp: otp,
          user: user,
        });
      }
    } else {
      // Invalid input
      return res.status(400).json({ message: "Invalid input", success: false });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const verifyOtp = async (req, res) => {
  const { user, otp } = req.body;

  try {
    if (!user || !otp) {
      return res
        .status(400)
        .json({ message: "otp or user is required", success: false });
    }
    // Check if the email already exists in the database

    const existingUser = await loginModel.findOne({
      user: user.trim(),
      otp: otp,
    });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Invalid Username/OTP combination", success: false });
    }
    existingUser.lastLoginAt = new Date();
    await existingUser.save();
    return res.status(200).json({
      message: "OTP verified successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
};

module.exports = { loginView, verifyOtp };
