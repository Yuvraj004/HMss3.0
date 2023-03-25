const adminModel = require("../models/adminModel");
const docModel = require("../models/docModel");
const patientModel = require("../models/patientModel");
var refreshtokens = []
exports.Login = (req, res) => {
    var currModel = ""
    if (req.body.role == "admin") {
        currModel = adminModel;
    }
    else if (req.body.role = "doctor") {
        currModel = docModel
        currModel.find({ email: req.body.email, password: req.body.password }, (err, doc) => {
            if (doc.length != 0) {
                const token = jwt.sign({ id: doc[0].doctor_id, authorized: true, name: doc[0].doctor_name }, "secretkey", { expiresIn: '2m' })
                const refreshtoken = jwt.sign({ id: doc[0].doctor_id, authorized: true, name: doc[0].doctor_name }, "secretkeyok")
                refresh.refreshtokens.push(refreshtoken);
                res.header("auth-token", token).send({ "token": token });
            }
            else {
                res.send("Invalid Email or Password");
            }
        })
    }
    else {
        currModel = patientModel
    }
    
}