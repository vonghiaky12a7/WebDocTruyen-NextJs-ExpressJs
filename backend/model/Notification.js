const mongoose = require("mongoose");

// Notification Schema
const NotificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    type: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    storyId: { type: String, required: true },
    userIds: { type: [Number], required: true },
    isRead: { type: Map, of: String } // Map với key là userId, value là trạng thái
});

module.exports = mongoose.model(
  "Notification",
  NotificationSchema,
  "notifications"
);