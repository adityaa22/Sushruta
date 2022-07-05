import React, { useState, useEffect } from "react";
import "./DoctorHomepage.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const DoctorHomepage =  () => {
    
    const navigate = useNavigate();
    const AppointReq = () =>  navigate("/appointment-request")
    const ActiveAppoint = () => navigate("/active-appointment-doctor")
    const prevAppoint = () => navigate("/prev-appointment-doctor")

    const [id, setId] = useState();
    
    const [Name, setName] = useState();
    const [status, setStatus] = useState("");
    useEffect( () => {
        setId(localStorage.getItem('token'));  
    }, [])
    useEffect(() => {  
        if (id) {
            const doctor = {
                key: id
            }
             axios.post("http://localhost:9002/doctor-homepage", doctor)
                 .then((res) => {
                    // console.log(res)
                    setName(res.data.fname + " " + res.data.lname)
                    setStatus(res.data.status)
                })
        }
    },[id])

    if (status === "Verified") {
        return (
            <>
                <div className="DoctorHomepage">
                    <h1>Welcome {Name}</h1>
                    <div className="button" onClick={AppointReq}>Check Appointment Requests</div>
                    <div>or</div>
                    <div className="button" onClick={ActiveAppoint}>Check Active appointments</div>
                    <div>or</div>
                    <div className="button" onClick={prevAppoint}>Check Previous appointments</div>
                </div>
                </>
            )   
    } else if(status==="Rejected"){
        return (
            <>
                <div>
                    <h1>Your Profile has been Rejected</h1>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <h1>Waiting For Admin Verification</h1>
                </div>
            </>
        )
    }
}

export default DoctorHomepage