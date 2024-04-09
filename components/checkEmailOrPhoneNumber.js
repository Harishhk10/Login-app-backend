const checkEmailOrPhoneNumber = (input) => {
  const value = input.trim();
  
  // Check if the input is empty
  if (value.length === 0) {
    return "Enter value";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; 

  if (emailRegex.test(value)) {
    return "email";
  } else if (phoneRegex.test(value)) {
    return "phone";
  } else {
    return "Unknown";
  }
};

module.exports = checkEmailOrPhoneNumber;
