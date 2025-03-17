const Doctor = require("../models/doctorModel");

// Get all doctors (with pagination)
exports.getDoctors = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const doctors = await Doctor.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const totalDoctors = await Doctor.countDocuments();
    
    res.status(200).json({
      doctors,
      totalDoctors,
      totalPages: Math.ceil(totalDoctors / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error });
  }
};

// Get single doctor
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctor", error });
  }
};

// Add new doctor
// Add new doctor
exports.addDoctor = async (req, res) => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD format
    const formattedTime = currentDate.toTimeString().split(" ")[0]; // HH:MM:SS format

    const newDoctor = new Doctor({
      ...req.body,
      date: formattedDate,
      time: formattedTime,
    });

    await newDoctor.save();
    res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ message: "Error adding doctor", error });
  }
};
// Update doctor
exports.updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) return res.status(404).json({ message: "Doctor not found" });

    res.status(200).json({ message: "Doctor updated", doctor: updatedDoctor });
  } catch (error) {
    res.status(500).json({ message: "Error updating doctor", error });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ message: "Doctor not found" });

    res.status(200).json({ message: "Doctor deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting doctor", error });
  }
};
