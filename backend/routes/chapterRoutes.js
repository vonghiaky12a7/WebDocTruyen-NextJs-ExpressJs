const express = require("express");
const chapterController = require("../controllers/chapterController");

const router = express.Router();

// Gốc API: `/chapters`

// Lấy tất cả chapters của một story (có phân trang)
router.get("/:story_id", chapterController.getAllChapters);

// Lấy chapter theo ID
router.get("/:story_id/:chapter_id", chapterController.getChapterById);

// Thêm chapter mới
router.post("/:story_id", chapterController.createChapter);

// Cập nhật chapter
router.put("/:story_id/:chapter_id", chapterController.updateChapter);

// Xóa chapter
router.delete("/:story_id/:chapter_id", chapterController.deleteChapter);

module.exports = router;
