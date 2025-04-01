const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  month: String,
  appointments: Number,
  patients: Number,
});

const HospitalData = mongoose.model("HospitalData", hospitalSchema);

module.exports = HospitalData;
