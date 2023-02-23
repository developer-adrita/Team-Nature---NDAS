const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    designation: String,
    institution: String,
    phone: String,
    user_type: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
