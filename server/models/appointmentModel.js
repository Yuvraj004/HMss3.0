const mongoose = require("mongoose");
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);
const appointmentSchema = new Schema({
    
    Name: {
        type: String,
    },
    Email: {
        type: String,
    },
    Contact: {
        type: String,
    },
    Description: {
        type: String,
    },
    Day: {
        type: String,
    },
    DoctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "docModel", // Reference the Doctor model name
    },
    prescription: {
        type: String,
    },
    appointment_id: {
        type: Number,
    },
    
})
appointmentSchema.plugin(autoIncrement.plugin, { model: "appointmentModel", field: "appointment_id" })
const appointmentModel = mongoose.model("appointmentModel", appointmentSchema);
module.exports = appointmentModel;