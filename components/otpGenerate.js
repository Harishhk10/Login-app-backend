const otpGenerate = (length) => {
  const charset = "123456789";
  let randomPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomPassword += charset[randomIndex];
  }
  return randomPassword;
};

module.exports = otpGenerate;
