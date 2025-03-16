const express = require("express");
const DashboardCard = require("../models/dashboardCards");
const Appointment = require("../models/appointment");
const Patient = require("../models/Patient");

const router = express.Router();

// Fetch all dashboard cards
router.get("/", async (req, res) => {
  try {
    const cards = await DashboardCard.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data", error });
  }
});

// Seed initial data
router.post("/seed", async (req, res) => {
  try {
    await DashboardCard.deleteMany();
     // Clear previous data
    const appointmentCount = await Appointment.countDocuments();
    const patientCount = await Patient.countDocuments();
    const newCards = [
      { title: "Appointments", value: appointmentCount, percentage: 30, color: "teal", icon: "faCalendarCheck" },
      { title: "New Patients", value: patientCount, percentage: 50, color: "orange", icon: "faUserPlus" },
      { title: "Operations", value: 400, percentage: 40, color: "blue", icon: "faProcedures" },
      { title: "HPL Earning", value: "$15,500", percentage: 20, color: "purple", icon: "faDollarSign" },
    ];
    await DashboardCard.insertMany(newCards);
    res.json({ message: "Dashboard data seeded successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error seeding data", error });
  }
});

module.exports = router;
