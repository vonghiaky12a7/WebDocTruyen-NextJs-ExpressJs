const Story = require("../model/Story");

exports.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find({}, { _id: 0 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findOne(
      { storyId: req.params.storyId },
      { _id: 0 }
    );
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createStory = async (req, res) => {
  try {
    const existingStory = await Story.findOne({ storyId: req.body.storyId });
    if (existingStory) {
      return res
        .status(400)
        .json({ message: "Story with this ID already exists" });
    }

    const story = new Story(req.body);
    await story.save();
    res
      .status(201)
      .json({ message: "Story created successfully", id: story.storyId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStory = async (req, res) => {
  try {
    const result = await Story.updateOne(
      { storyId: req.params.storyId },
      { $set: req.body }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: "Story updated successfully" });
    } else {
      res.status(404).json({ message: "Story not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStory = async (req, res) => {
  try {
    const result = await Story.deleteOne({ storyId: req.params.storyId });
    if (result.deletedCount > 0) {
      res.json({ message: "Story deleted successfully" });
    } else {
      res.status(404).json({ message: "Story not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
