const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create Order
router.post("/add", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
