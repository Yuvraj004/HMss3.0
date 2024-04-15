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
        console.log(doc);
        if (doc) {
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

exports.editProfile  = async(req,res) => {
    
    
    const { Id, name, email, address, phone } = req.body;
    const updateData = {};
   
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (address) updateData.address = address;
    if (phone) updateData.phone = phone;

    console.log(updateData);

    patientModel.updateOne({_id: Id},{$set:updateData},
        {returnOriginal: false}, async err =>{
        if(err){
            console.log(err)
            res.send("Error occured").status(500);
        }
        else{
            res.send("Profile Updated").status(200);
        }
    })
}