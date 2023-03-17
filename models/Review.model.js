const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: Date.now
    }
  },
  { timestamps: true }
);

const Review = model("review", ReviewSchema);

module.exports = Review;
