const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:user_id", userController.getUserById);
router.get("/email/:email", userController.getUserByEmail);
router.post("/", userController.createUser);
router.put("/:user_id", userController.updateUser);
router.delete("/:user_id", userController.deleteUser);

module.exports = router;
