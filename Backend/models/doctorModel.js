const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    medicalSchool: String,
    medicalID: String,
    specialization: String,
    city: String,
    status: String,
    appointmentRequest: {
        type: Array,
        "default": []
    }
    // imageID:
    // {
    //     data: Buffer,
    //     contentType: String
    // },
    // imageDP:
    // {
    //     data: Buffer,
    //     contentType: String
    // }
})



const Doctor = new mongoose.model("Doctor", doctorSchema);
module.exports = Doctor