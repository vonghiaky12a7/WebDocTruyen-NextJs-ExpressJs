const express = require("express");
const storyController = require("../controllers/storyController");

const router = express.Router();

router.get("/", storyController.getAllStories);
router.get("/:storyId", storyController.getStoryById);
router.post("/", storyController.createStory);
router.put("/:storyId", storyController.updateStory);
router.delete("/:storyId", storyController.deleteStory);

module.exports = router;
