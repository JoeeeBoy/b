const Review = require("../Models/Review.model");

module.exports.reviewController = {
  postReview: async (req, res) => {
    const { text, nameAuthor, book } = req.body;
    try {
      await Review.create({
        text,
        nameAuthor,
        book,
      });
      res.json(`Рецензия добавлена!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json(`Рецензия с id:${req.params.id} удалена!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchReview: async (req, res) => {
    const { text, nameAuthor, book } = req.body;
    try {
      await Review.findByIdAndUpdate(req.params.id, {
        text,
        nameAuthor,
        book,
      });
      res.json(`Рецензия с id:${req.params.id} изменена!`);
    } catch (error) {
      console.log(error);
    }
  },

  getReviews: async (req, res) => {
    try {
      res.json(await Review.find({}).populate("book"));
    } catch (error) {
      console.log(error);
    }
  },

  getIdReview: async (req, res) => {
    try {
      const data = await Review.findById(req.params.id).populate("book", "name");
      res.json(data)
    } catch (error) {
      res.json({
        error: error.message
      })
    }
  },
};
