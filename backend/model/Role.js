const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    roleId: { type: Number, required: true },
    roleName: { type: String, required: true },
  }
);

module.exports = mongoose.model("Role", RoleSchema, "roles");
