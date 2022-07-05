import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import './AppointmentRequestCard.css';
import axios from "axios"

const AppointmentRequestCard = (props) => {  
    const ACRJID = "AC-RJ"+props.num
    const ACID = "AC" + props.num
    const [link, setLink] = useState("");
    const [remarks, setRemarks] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const RejectionMessage = "Sorry! Doctor could not arrange an appointment due to the busy schedule. You can seek help from other Doctors. Stay Healthy!!"
    const dbSearchobj = {
        doctorID: props.docID,
        useremail: props.email,
    }
    const doctorRemarkobj = {
        remarks: remarks,
        link: link,
        date: date,
        time: time,
    }
    const ACpostobj = {
        dbSearchobj,
        doctorRemarkobj
    }
    const RJpostobj = {
        dbSearchobj,
        RejectionMessage
    }
    const Accept =()=> {
        axios.post("http://localhost:9002/accept-request", ACpostobj).
            then(window.location.reload(false))
            .catch(err=>console.log(err))
    }
    const Reject = () => {
        axios.post("http://localhost:9002/accept-request", RJpostobj).
            then(window.location.reload(false))
            .catch(err=>console.log(err))
    }
    const handleLink = (e) => setLink(e.target.value)
    const handleRemarks = (e) => setRemarks(e.target.value)
    const handledate = (e) => setDate(e.target.value)
    const handletime = (e) => setTime(e.target.value)
    const ACkey= "#"+ACID
    const ACRJkey= "#"+ACRJID
    const AC = () => {
        document.querySelector(ACkey).style.display = "flex"   
        document.querySelector(ACRJkey).style.display = "none"   
    }
    const close = () => {
        document.querySelector(ACkey).style.display = "none"
        document.querySelector(ACRJkey).style.display = "flex"
    }
    return (
        <>
            <div className="AppointmentRequestCard">
                <div className="information">
                    <p>Name: {props.name} </p> 
                    <div className="desc">
                        <p>Description:</p> <p style={{ marginLeft: "10px", wordBreak: "break-word" }}>{ props.description }</p>
                    </div>
                        
                    <p>Preferred Date: {props.date} </p>
                </div>
                <div id={ACRJID} className="AC-RJ">
                    <button onClick={AC}>Accept</button>
                    <button onClick={Reject}>Reject</button>
                </div>
                <div id ={ACID} className="AC-Card">
                    <div className="description">
                        
                        <TextField 
                            placeholder="Write any message for the patient"
                            label="Remarks"
                            value={remarks}
                            fullWidth
                            rows={3}
                            multiline={true}
                            onChange={handleRemarks}
                            
                         />  
                        <TextField 
                            placeholder="Meet Link for the appointment"
                            label="Appointment Link"
                            value={link}
                            fullWidth
                            rows={2}
                            multiline={true}
                            onChange={handleLink}
                            
                         />  
                    </div>
                    <div className="Date-Time">
                        <h3>Select a Preferable Date and Time</h3>
                        <TextField     
                            type="date"  
                            value={date}
                            onChange={handledate}
                         />
                        <TextField     
                            type="time"  
                            value={time}
                            onChange={handletime}
                         />
                    </div>
                    <button className="btn" onClick={Accept}>Accept</button>
                    <div className="Close" onClick={close}>+</div>
                </div>     
            </div>
        </>
    )
}

export default AppointmentRequestCard