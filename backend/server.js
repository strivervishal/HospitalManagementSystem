require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const patientRoutes = require("./routes/patientRoutes");
app.use("/patients", patientRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
