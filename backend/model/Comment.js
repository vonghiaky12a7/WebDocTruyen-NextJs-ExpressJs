const mongoose = require("mongoose");

// Comment Schema
const CommentSchema = new mongoose.Schema({
    commentId: { type: String, required: true },
    storyId: { type: String, required: true },
    userId: { type: Number, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", CommentSchema, "comments");