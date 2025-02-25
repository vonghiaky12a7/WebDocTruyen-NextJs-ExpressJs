const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  avatarPath: { type: String, default: null },
  isPassword: { type: Boolean, required: true },
  role: {
    roleId: { type: Number, required: true },
    roleName: { type: String, required: true },
  },
});

module.exports = mongoose.model("User", userSchema, "users");
