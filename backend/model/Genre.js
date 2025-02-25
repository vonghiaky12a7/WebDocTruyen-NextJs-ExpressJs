const mongoose = require("mongoose");

// Genre Schema
const GenreSchema = new mongoose.Schema({
    genreId: { type: Number, required: true },
    genreName: { type: String, required: true }
});

module.exports = mongoose.model("Genre", GenreSchema, "genres");