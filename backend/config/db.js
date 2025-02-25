const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Tạo các index
    const db = mongoose.connection.db;
    await db.collection("stories").createIndex({ title: 1 });
    await db.collection("stories").createIndex({ title: "text" });
    await db.collection("chapters").createIndex({ chapterNumber: 1 });
    await db
      .collection("chapters")
      .createIndex({ storyId: 1, chapterNumber: 1 });
    await db.collection("roles").createIndex({ roleId: 1 }, { unique: true });
    await db
      .collection("comments")
      .createIndex({ commentId: 1 }, { unique: true });
    await db.collection("favors").createIndex({ favorId: 1 }, { unique: true });
    await db
      .collection("favors")
      .createIndex({ userId: 1, storyId: 1 }, { unique: true });
    await db.collection("genres").createIndex({ genreId: 1 }, { unique: true });
    await db
      .collection("block_stories")
      .createIndex({ userId: 1, storyId: 1 }, { unique: true });
    await db.collection("notifications").createIndex({ createdAt: -1 });
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
