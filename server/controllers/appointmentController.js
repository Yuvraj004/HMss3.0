const appointmentModel = require("../models/appointmentModel");
exports.getAppoitments = (req, res) => {
    console.log(req.params);
    appointmentModel.find({ doctor_id: req.params.doctor_id }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            res.send(err);
        }
    })
}
exports.postAppointment = (req, res) => {
    const Name = req.body.data.name.Name;
    const Email = req.body.data.email.Email;
    const Contact = req.body.data.contact.Contact;
    const Day = req.body.data.day.Day;
    const Description= req.body.data.description;
    const DoctorId = req.body.data.doctorId;
    const apt = {
        Name,Email,Contact,Day,Description,DoctorId
    }
    const appointmentData = new appointmentModel(apt);
    appointmentData.save((err) => {
        if (!err) {
            res.send("Appointment Inserted");
        }
        else {
            res.send("Error in insertion");
        }
    })

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