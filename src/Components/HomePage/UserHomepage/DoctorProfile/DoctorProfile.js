import React, { useState } from "react";
import "./DoctorProfile.css";
import InfoCard from "./InfoCard";
import PictureCard from "./PictureCard";
import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
const DoctorProfile = () => {
    const location = useLocation()
  
    const Book = () => {
        document.querySelector('#Book').style.display = "flex"   
    }
    const close = () => {
        document.querySelector('#Book').style.display = "none"
    }
    const [value, setValue] = useState(
        new Date(''),
    );
    const [description, setDescription] = useState("");
    const handleDescription = (e) => {
        // console.log(e.target.value)
        setDescription(
            e.target.value
        )
        // console.log(description)
    }
    const handleDate = (e) => {
        // console.log(typeof(e.target.value))
        setValue(
            e.target.value
        )
        // console.log(description)
    }
    const userName = location.state.username
    const userEmail = location.state.useremail
    const doctorID = location.state.id
    const User = {
        doctorID,
        userName,
        userEmail,
        description,
        value
    }
    // console.log(User)

    const BookAppointment = async() => {
        await axios.post("http://localhost:9002/Book-appointment", User)
            .then(res => {
                alert(res.data.message)
            }   
        )
            .catch(err => console.log(err))
        document.querySelector('#Book').style.display = "none"
    }
    return (
        <>
            <div className="DoctorProfile">
                <div className="col1">
                    <PictureCard />
                </div>
                <div className="col2">
                    <InfoCard 
                    Name={location.state.name}
                    email={location.state.email}
                    specialization={location.state.specialization}
                    city={location.state.city}
                    />
                    <div className="btn"><button onClick={Book}>Book Appointment</button></div>
                </div>
            </div>
            <div id = "Book" className="Card-bg">
                <div className="Book-Card">
                    <div className="description">
                        
                        <TextField 
                            placeholder="Write a Short Description of your problem"
                            label="Describe your Problem"
                            value={description}
                            fullWidth
                            rows={3}
                            multiline={true}
                            onChange={handleDescription}
                            
                         />  
                    </div>
                    <div className="date">
                        <h3>Select a Preferable Date</h3>
                        <TextField     
                            type="date"  
                            value={value}
                            onChange={handleDate}
                         />
                    </div>
                    <button className="btn" onClick={BookAppointment}>Send Request</button>
                    <div className="close" onClick={close}>+</div>
                </div>
            </div>
        </>
    )
}

export default DoctorProfile