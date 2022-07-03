const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const loginRouter = require('./routers/Login.route')
const registerPatientRouter = require('./routers/registerPatient.route')
const registerDoctorRouter = require('./routers/registerDoctor.route')
const userHomepageRouter = require('./routers/userHomepage.route')
const adminRouter = require('./routers/Admin.route')
const doctorHomepageRouter = require('./routers/DoctorHomepage.route')
const adminVerifyRouter = require('./routers/Admin.verify.route')
const SearchDoctor = require('./routers/SearchDoctor.route')
const BookAppointment = require('./routers/BookAppointment.route')

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/Login', loginRouter)
app.use('/register-patient',registerPatientRouter)
app.use('/register-doctor', registerDoctorRouter)
app.use('/user-homepage',userHomepageRouter)
app.use('/admin', adminRouter)
app.use('/doctor-homepage', doctorHomepageRouter)
app.use('/admin-verify', adminVerifyRouter)
app.use('/search-doctors', SearchDoctor)
app.use('/Book-appointment',BookAppointment)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


app.listen(9002, () => {
    console.log("BE started at port 9002")
})