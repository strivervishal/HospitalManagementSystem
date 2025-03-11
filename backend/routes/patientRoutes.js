


const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new patient
router.post("/", async (req, res) => {
  try {
    const { name, age, gender, appointment, doctorAssigned } = req.body;
    const newPatient = new Patient({ name, age, gender, appointment, doctorAssigned });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a patient
router.delete("/:id", async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
