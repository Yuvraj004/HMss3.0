const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
router.get("/patientList", patientController.getPatient);
router.post("/patientList", patientController.postPatient);
router.delete("/patientList/:patient_id", patientController.deletePatient);
router.post("/loginpatient", patientController.login);
router.post("/editProfile",patientController.editProfile);
module.exports = router