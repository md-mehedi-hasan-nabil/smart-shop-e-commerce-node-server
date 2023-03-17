const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/Product.controller");

router.get("/", getProducts);
router.get("/:productId", getProduct);
router.post("/", addProduct);
router.patch("/:productId", editProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
