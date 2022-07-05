const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    activeAppointment: {
        type: Array,
        "default": []
    },
    previousAppointment: {
        type: Array,
        "default": []
    },
})
const User = new mongoose.model("User", userSchema);
module.exports = User