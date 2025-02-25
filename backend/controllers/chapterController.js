const Chapter = require("../models/Chapter");

// Lấy tất cả chapters của một story (có phân trang)
exports.getAllChapters = async (req, res) => {
  try {
    const { story_id } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const chapters = await Chapter.find({ storyId: story_id })
      .sort({ chapterNumber: 1 })
      .skip(skip)
      .limit(limit)
      .lean(); // Convert to plain objects

    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chapters", error });
  }
};

// Lấy chapter bằng chapterId và storyId
exports.getChapterById = async (req, res) => {
  try {
    const { story_id, chapter_id } = req.params;
    const chapter = await Chapter.findOne({
      chapterId: chapter_id,
      storyId: story_id,
    });

    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chapter", error });
  }
};

// Thêm chapter mới
exports.createChapter = async (req, res) => {
  try {
    const existingChapter = await Chapter.findOne({
      chapterId: req.body.chapterId,
    });
    if (existingChapter)
      return res.status(400).json({ message: "Chapter already exists" });

    const newChapter = new Chapter(req.body);
    await newChapter.save();

    res
      .status(201)
      .json({
        message: "Chapter created successfully",
        chapterId: newChapter.chapterId,
      });
  } catch (error) {
    res.status(500).json({ message: "Failed to create chapter", error });
  }
};

// Cập nhật chapter
exports.updateChapter = async (req, res) => {
  try {
    const { story_id, chapter_id } = req.params;
    const result = await Chapter.updateOne(
      { chapterId: chapter_id, storyId: story_id },
      { $set: req.body }
    );

    if (result.modifiedCount === 0)
      return res.status(404).json({ message: "Chapter not found" });

    res.json({ message: "Chapter updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update chapter", error });
  }
};

// Xóa chapter
exports.deleteChapter = async (req, res) => {
  try {
    const { story_id, chapter_id } = req.params;
    const result = await Chapter.deleteOne({
      chapterId: chapter_id,
      storyId: story_id,
    });

    if (result.deletedCount === 0)
      return res.status(404).json({ message: "Chapter not found" });

    res.json({ message: "Chapter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete chapter", error });
  }
};
