const Router = require("express");
const { bookController } = require("../Controllers/book.controllers");
const router = Router();

router.get("/books", bookController.getBooks);
// router.get("/drinks/instock", drinkController.getInstock);
router.get("/books/:id", bookController.getIdBook);
router.post("/books", bookController.postBook);
router.delete("/books/:id", bookController.deleteBook);
router.patch("/books/:id", bookController.patchBook);

module.exports = router;
