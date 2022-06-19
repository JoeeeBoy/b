const Router = require("express");
const { genreController } = require("../Controllers/genre.controller");
const router = Router();

router.get("/genres", genreController.getGenres);
router.get("/genres/:id", genreController.getIdGenre);
router.post("/genres", genreController.postGenre);
router.delete("/genres/:id", genreController.deleteGenre);
router.patch("/genres/:id", genreController.patchGenre);

module.exports = router;
