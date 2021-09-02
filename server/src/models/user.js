// This is only a sample file for how to setup a db model

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 255,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255,
      trim: true,
    },
    hasRegistered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      default: null,
      minlength: 5,
      maxlength: 1024,
      trim: true,
    },
    phone: {
      country: { type: String, required: true },
      number: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
