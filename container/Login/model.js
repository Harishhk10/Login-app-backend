const mongoose = require("mongoose");

const { Schema } = mongoose;

const LoginSchema = new Schema({
  user: { type: String, required: true, trim: true, unique: true },
  otp: { type: Number, trim: true },
  lastLoginAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const loginModel = mongoose.model("login", LoginSchema);

module.exports = { loginModel };
