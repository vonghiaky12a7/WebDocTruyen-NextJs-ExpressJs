const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  storyId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  genreIds: { type: [Number], required: true },
  chapters: { type: Number, default: 0 },
  rating: { type: Number, default: null },
  releaseDate: { type: Date, required: true },
});

module.exports = mongoose.model("Story", storySchema, "stories");
