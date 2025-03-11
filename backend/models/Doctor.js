const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  availability_date: { type: Date, required: true },
  availability_time: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);
