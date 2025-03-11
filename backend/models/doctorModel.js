const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  specialization: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  availability: {
    days: { type: [String], required: true },
    time: { type: String, required: true },
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  profileImage: { type: String, required: true },
});

module.exports = mongoose.model("Doctor", doctorSchema);
