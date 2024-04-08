const express = require("express");
const router = express.Router();
const { loginView, verifyOtp } = require("./views");
router.post("/send-otp", loginView);
router.post("/verify-otp", verifyOtp);

module.exports = router;
