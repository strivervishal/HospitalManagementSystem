const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  appointment: String,
  doctorAssigned: String
});

module.exports = mongoose.model("Patient", PatientSchema);
