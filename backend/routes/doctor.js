const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

// Create Doctor
router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Doctors with Filters, Search, and Pagination
router.get("/", async (req, res) => {
  try {
    let { search, department, date, time, page, limit } = req.query;
    let query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    if (department) query.department = department;
    if (date) query.availability_date = new Date(date);
    if (time) query.availability_time = time;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const skip = (page - 1) * limit;

    const doctors = await Doctor.find(query).skip(skip).limit(limit);
    const total = await Doctor.countDocuments(query);

    res.status(200).json({ doctors, total, page, limit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Doctor by ID
router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Doctor
router.put("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Doctor
router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json({ message: "Doctor deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export Data
router.get("/export", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
