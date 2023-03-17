const express = require("express");
const router = express.Router();
const {
  getOrders,
  addOrder,
  getOrder,
  editOrder,
  deleteOrder,
} = require("../controllers/Order.controller");

router.get("/", getOrders);
router.get("/:orderId", getOrder);
router.post("/", addOrder);
router.patch("/:orderId", editOrder);
router.delete("/:orderId", deleteOrder);

module.exports = router;
