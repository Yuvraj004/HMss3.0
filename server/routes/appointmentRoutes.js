const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
router.get("/appointmentList/:patient_id", appointmentController.getAppoitments);
router.post("/createAppointment", appointmentController.postAppointment);
router.post("/addPrescription", appointmentController.postPrescription);
module.exports = router;