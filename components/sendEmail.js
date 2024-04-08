"use strict";
const nodemailer = require("nodemailer");
const emailSend = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
  

    auth: {
      user: "harish18email@gmail.com",
      pass: "vtty hwbb zkvn ggmp",
    },
 
  });

  const info = {
    from: "harish18email@gmail.com",
    to: to.trim(),
    subject: subject,
    text: `your password is: ${text}`,
  };

  transporter.sendMail(info, (error, info) => {
    if (error) {
      console.error("error", error);
    } else {
      console.log("email Sent successfully");
    }
  });
};

module.exports = { emailSend };
