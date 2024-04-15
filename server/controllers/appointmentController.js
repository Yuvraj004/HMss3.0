const appointmentModel = require("../models/appointmentModel");
const patientModel = require("../models/patientModel");
exports.getAppoitments = (req, res) => {
    // console.log(req.params);
    patientModel.findOne({ _id: req.params.patient_id }, (err, doc) => {
        if (!err) {
            res.send(doc).status(200);
        }
        else {
            res.send(err).status(400);
        }
    })
}
exports.postAppointment = async (req, res) => {
    if(req.body== null) res.status(400).send("NO data Received.");
    const Name = req.body.data.name.Name;
    const Email = req.body.data.email.Email;
    const Contact = req.body.data.contact.Contact;
    const Day = req.body.data.day.Day;
    const Department = req.body.data.department;
    const Description= req.body.data.description.Description;
    const DoctorId = req.body.data.doctorId;
    const apt = {
        Name,Email,Contact,Day,Description,Department,DoctorId
    }
    const appointmentData = new appointmentModel(apt);
    const savedAppointment = await appointmentData.save();
    try {
        res.send({ appointmentId: savedAppointment._id });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating appointment");
    }


}
exports.postPrescription = (req, res) => {
    appointmentModel.updateOne({ appointment_id: req.body.appointment_id }, { prescription: req.body.prescription }, (err) => {
        if (!err) {
            res.send(err);
        }
        else {
            res.send("Added succuessfully");
        }
    })
}