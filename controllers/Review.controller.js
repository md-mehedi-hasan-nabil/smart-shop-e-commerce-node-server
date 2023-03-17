const ReviewModel = require("../models/Review.model");
const ProductModel = require("../models/Product.model");

// get all review
async function getReviews(req, res, next) {
  try {
    const books = await ReviewModel.find({}).populate([
      "product",
    ]);;
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// get review by product
async function getReviewByProductId(req, res, next) {
  const { productId } = req.params || {};

  const comments = await ReviewModel.find({ product: productId }).populate([
    "product",
    "user",
  ]);
  res.status(200).json(comments);

  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// get review by user
async function getReviewByUserId(req, res, next) {
  const { usertId } = req.params || {};

  const comments = await ReviewModel.find({ user: usertId }).populate([
    "product",
    "user",
  ]);
  res.status(200).json(comments);

  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function addReview(req, res, next) {
  try {
    const { userId,
      productId,
      message } = req.body || {};

    const newReview = new ReviewModel({
      user: userId,
      product: productId,
      message
    })

    await newReview.save()

    // update product by review
    const product = await ProductModel.findById(productId);

    product.review.push(newReview?._id);
    await product.save();

    res.status(200).json({
      success: {
        message: "Review success",
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteReview(req, res, next) {
  const { reviewId } = req.params || {};

  const review = await ProductModel.findByIdAndDelete(reviewId);

  res.status(200).json({
    message: "Review delete successfully.",
    review,
  });
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function editReview(req, res, next) {
  try {
    const { reviewId } = req.params || {};
    const updatedReview = await ProductModel.findByIdAndUpdate(
      reviewId,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json({
      message: "Review update successfull.",
      review: updatedReview,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getReviews,
  addReview,
  getReviewByProductId,
  getReviewByUserId,
  editReview,
  deleteReview,
};
