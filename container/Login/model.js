const mongoose = require("mongoose");

const { Schema } = mongoose;

const LoginSchema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  otp: { type: Number, trim: true },
  lastLoginAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userType: {
    type: String,
  },
});

const loginModel = mongoose.model("login", LoginSchema);

module.exports = { loginModel };
