const express = require("express");
const roleController = require("../controllers/roleController");

const router = express.Router();

// Định nghĩa API lấy danh sách tất cả roles
router.get("/", roleController.getAllRoles);

module.exports = router;
