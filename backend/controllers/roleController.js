const Role = require("../model/Role");

// Lấy danh sách tất cả các roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find({}, { _id: 0 }); // Lấy tất cả roles từ MongoDB
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch roles", error });
  }
};
