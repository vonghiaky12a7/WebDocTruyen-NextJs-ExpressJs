const User = require("../model/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { _id: 0 });
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err); // Log lỗi
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ userid: req.params.user_id }, { _id: 0 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }, { _id: 0 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ userid: req.body.userid }, { email: req.body.email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User(req.body);
    await user.save();
    res
      .status(201)
      .json({ message: "User created successfully", id: user.userid });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const result = await User.updateOne(
      { userid: req.params.user_id },
      { $set: req.body }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne({ userid: req.params.user_id });
    if (result.deletedCount > 0) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
