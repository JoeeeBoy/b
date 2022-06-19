const Router = require("express");
const { reviewController } = require("../Controllers/review.controller");
const router = Router();

router.get("/reviews", reviewController.getReviews);
router.get("/reviews/:id", reviewController.getIdReview);
router.post("/reviews", reviewController.postReview);
router.delete("/reviews/:id", reviewController.deleteReview);
router.patch("/reviews/:id", reviewController.patchReview);

module.exports = router;
