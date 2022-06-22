const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password : String
})
const AdminDB = new mongoose.model("AdminData", adminSchema);
module.exports = AdminDB