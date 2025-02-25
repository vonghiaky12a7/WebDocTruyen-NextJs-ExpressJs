const mongoose = require("mongoose");

// BlockedStories Schema
const BlockedStorySchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    storyId: { type: String, required: true },
  }
);

module.exports = mongoose.model(
  "BlockedStory",
  BlockedStorySchema,
  "block_stories"
);
