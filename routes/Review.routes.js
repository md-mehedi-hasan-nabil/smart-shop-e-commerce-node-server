const express = require("express");
const router = express.Router();
const {
  getReviews,
  addReview,
  getReviewByProductId, getReviewByUserId,
  editReview,
  deleteReview,
} = require("../controllers/Review.controller");

router.get("/", getReviews);
router.get("/product/:productId", getReviewByProductId);
router.get("/user/:userId", getReviewByUserId);
router.post("/", addReview);
router.put("/:reviewId", editReview);
router.delete("/:reviewId", deleteReview);

module.exports = router;
