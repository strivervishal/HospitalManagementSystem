const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.get("/", doctorController.getDoctors);
router.get("/:id", doctorController.getDoctorById);
router.post("/", doctorController.addDoctor);
router.put("/:id", doctorController.updateDoctor);
router.delete("/:id", doctorController.deleteDoctor);

module.exports = router;
