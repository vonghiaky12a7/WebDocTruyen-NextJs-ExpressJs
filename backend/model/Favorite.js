const mongoose = require("mongoose");

// Favorite Schema
const FavoriteSchema = new mongoose.Schema({
    favorId: { type: String, required: true },
    userId: { type: Number, required: true },
    storyId: { type: String, required: true }
});

module.exports = mongoose.model("Favorite", FavoriteSchema, "favors");