const mongoose = require("mongoose");

// Rating Schema
const RatingSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    storyId: { type: String, required: true },
    rating: { type: Number, required: true }
});

module.exports = mongoose.model("Rating", RatingSchema, "ratings");