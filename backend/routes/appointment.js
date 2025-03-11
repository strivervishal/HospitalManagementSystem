const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");

// ✅ Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching appointments" });
  }
});

// ✅ Add new appointment
router.post("/", async (req, res) => {
  try {
    const { patientName, assignedDoctor, date, time } = req.body;
    const newAppointment = new Appointment({ patientName, assignedDoctor, date, time });
    await newAppointment.save();
    console.log(newAppointment)
    res.json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: "Error saving appointment" });
  }
});

// ✅ Delete appointment
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting appointment" });
  }
});

// ✅ Update appointment
router.put("/:id", async (req, res) => {
  try {
    const { patientName, assignedDoctor, date, time } = req.body;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { patientName, assignedDoctor, date, time },
      { new: true }
    );
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Error updating appointment" });
  }
});

module.exports = router;
