const mongoose = require("mongoose");
const validator = require("validator");

// User ka structure define kar rahe hain
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name compulsory hai
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true, // Same email repeat nahi hoga
      validate: [validator.isEmail, "Invalid Email Format"],
    },

    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum 8 characters
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
