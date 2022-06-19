const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: String,
  nameAuthor: String,
  book: {
    ref: "Book",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
