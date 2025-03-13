const express = require("express");
const Medicine = require("../models/Medicine");
const router = express.Router();

// Add Medicine
router.post("/add", async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).json({ message: "Medicine added successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Medicines
router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Medicine
router.delete("/:id", async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
