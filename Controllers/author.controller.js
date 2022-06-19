const Author = require("../Models/Author.model");

module.exports.authorController = {
  postAuthor: async (req, res) => {
    const { name, info} = req.body;
    try {
      await Author.create({
        name,
        info,
      });
      res.json(`Автор ${name} добавлена!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteAuthor: async (req, res) => {
    try {
      await Author.findByIdAndDelete(req.params.id);
      res.json(`Книга с id:${req.params.id} удалена!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchAuthor: async (req, res) => {
    const { name, info } = req.body;
    try {
      await Author.findByIdAndUpdate(req.params.id, {
        name,
        info,
      });
      res.json(`Книга с id:${req.params.id} изменена!`);
    } catch (error) {
      console.log(error);
    }
  },

  getAuthors: async (req, res) => {
    try {
      res.json(await Author.find({}));
    } catch (error) {
      console.log(error);
    }
  },

  getIdAuthor: async (req, res) => {
    try {
      res.json(await Author.findById(req.params.id));
    } catch (error) {
      console.log(error);
    }
  },


};
