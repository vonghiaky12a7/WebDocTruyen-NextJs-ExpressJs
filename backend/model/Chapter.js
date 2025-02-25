const mongoose = require("mongoose");

// Chapter Schema
const ChapterSchema = new mongoose.Schema({
    chapterId: { type: String, required: true },
    storyId: { type: String, required: true },
    chapterNumber: { type: Number, required: true },
    title: { type: String, required: true },
    imageUrls: { type: [String], required: true }
});

module.exports = mongoose.model("Chapter", ChapterSchema, "chapters");
