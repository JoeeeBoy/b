const Router = require("express");
const { authorController } = require("../Controllers/author.controller");
const router = Router();

router.get("/authors", authorController.getAuthors);
router.get("/authors/:id", authorController.getIdAuthor);
router.post("/authors", authorController.postAuthor);
router.delete("/authors/:id", authorController.deleteAuthor);
router.patch("/authors/:id", authorController.patchAuthor);

module.exports = router;
