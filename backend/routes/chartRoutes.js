const express = require("express");
const router = express.Router();
const HospitalData = require("../models/hospitalData"); // Make sure you have the correct model

// 📊 Fetch hospital chart data
router.get("/", async (req, res) => {
    try {
        const data = await HospitalData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching chart data" });
    }
});

module.exports = router;
