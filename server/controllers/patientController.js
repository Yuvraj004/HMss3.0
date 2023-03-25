var patientModel = require("../models/patientModel");
const jwt =require('jsonwebtoken');
const refreshtokens = require("../constants");

exports.getPatient = (req, res) => {

    patientModel.find({}, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            res.send(err);
        }
    })
}
exports.postPatient = (req, res) => {
    const patientData = new patientModel(req.body);
    patientData.save((err) => {
        if (!err) {
            res.send("Patient Inserted Sucessfully");
        }
        else {
            res.send(err);
        }
    })
}
exports.deletePatient = (req, res) => {
    console.log(req.params);
    patientModel.remove({ patient_id: req.params.patient_id }, (err) => {
        if (err) {
            res.send("Error occured");
        }
        else {
            res.send("Delted Succesfully");

        }
    })
}
exports.login = async(req, res) => {
    patientModel.findOne({ email: req.body.email }, async (err, doc) => {
        // console.log(doc);
        if (doc.length != 0) {
            const token = await jwt.sign({ id: doc._id, authorized: true, name: doc.patient_name }, "secretkey", { expiresIn: '2m' })
            const refreshtoken = jwt.sign({ id: doc._id, authorized: true, name: doc.patient_name }, "secretkeyok");
            // console.log(refreshtokens,refreshtoken);
            refreshtokens.push(refreshtoken);
            res.header("auth-token", token).send({ "token": token });
        }
        else {
            res.send("Invalid Email or Password");
        }
    })
}