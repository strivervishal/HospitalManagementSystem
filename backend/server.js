require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointment");

const app = express();

app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
