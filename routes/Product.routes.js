const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  addProductReview,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/Product.controller");

router.get("/", getProducts);
router.get("/:productId", getProduct);
router.post("/", addProduct);
router.post("/review", addProductReview);
router.patch("/:productId", editProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
