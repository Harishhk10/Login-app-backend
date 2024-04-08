const checkEmailOrPhoneNumber = (input) => {
  // Trim whitespace from the input
  const value = input.trim();
  
  // Check if the input is empty
  if (value.length === 0) {
    return "Enter value";
  }

  // Regular expressions for email and phone number validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // Adjust this regex according to your phone number format

  if (emailRegex.test(value)) {
    return "email";
  } else if (phoneRegex.test(value)) {
    return "phone";
  } else {
    return "Unknown";
  }
};

module.exports = checkEmailOrPhoneNumber;
