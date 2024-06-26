const docModel = require("../models/docModel");
const jwt = require("jsonwebtoken");
const refreshtokens = require("../constants");

exports.getDoctorList = function (req, res) {
    docModel.find({}, function (err, docs) {
        res.send(docs);
    })
}
exports.postDoctorList = function (req, res) {
    console.log(req.body)
    const docData = new docModel(req.body);
    docData.save(function (err) {
        if (!err)
            res.send("Doctor inserted succesfully")
        else
            res.send(err);
    })
}
exports.deleteDoc = (req, res) => {
    console.log(req.params);
    docModel.remove({ doctor_id: req.params.doctor_id }, function (err) {
        if (err) {
            res.send("Error occured");
        }
        else {
            res.send("Delted Succesfully");

        }
    })
}
exports.Login = (req, res) => {
    docModel.find({ email: req.body.email, password: req.body.password }, (err, doc) => {
        if (doc.length != 0) {
            const token = jwt.sign({ id: doc[0].doctor_id, authorized: true, name: doc[0].doctor_name }, "secretkey", { expiresIn: '2m' });
            const refreshtoken = jwt.sign({ id: doc[0].doctor_id, authorized: true, name: doc[0].doctor_name }, "secretkeyok");
            refreshtokens.push(refreshtoken);
            res.header("auth-token", token).send({ "token": token });
        }
        else {
            res.send("Invalid Email or Password");
        }
    })
}
exports.getDocProfile = (req, res) => {
    docModel.find({ doctor_id: req.params.doctor_id }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            res.send(err);
        }
    })
}
exports.editDocProfile = (req, res) => {
    docModel.updateOne({ doctor_id: req.body.Id }, { doctor_name: req.body.Name, email: req.body.Email, phone: req.body.Phone, address: req.body.Address }, (err) => {
        if (!err) {
            res.send("Updated sucessfully");
        }
        else {
            res.send(err);
        }
    })
}
exports.addAptDoc = async(req, res) => {
    const docID = req.body.doctorId;
    
    const aptID = req.body.appointmentId;
    console.log(req.body.appointmentId);

    try {
        const doctor = await docModel.findById(docID);
    
        if (!doctor) {
          return res.status(400).send("Invalid doctor ID");
        }
    
        doctor.apt.push(aptID); // Add appointment ID to the doctor's appointments array
        await doctor.save();
    
        res.send("Appointment added to doctor's profile successfully");
      } catch (error) {
        console.error("Error adding appointment to doctor profile:", error);
        res.status(500).send("Error adding appointment");
      }
}
exports.getDoctorIdByName = function (req, res) {
    const doctorName = req.params.name;
    docModel.find({ doctor_name: doctorName }, function (err, doctor) {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else if (!doctor) {
            res.status(404).json({ error: 'Doctor not found' });
        } else {
            res.status(200).json({ doctorId: doctor[0]._id });
        }
    });
}