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
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/appointments", require("./routes/appointment"));
app.use("/doctors",require("./routes/doctor"))
// Routes
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointment");

app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
