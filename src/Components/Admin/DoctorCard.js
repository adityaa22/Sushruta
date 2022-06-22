import React, { useEffect, useState } from "react";
import './DoctorCard.css';
import axios from 'axios'
const DoctorCard = (props) => {
    
    const verify = () => {
        const id = props.id

        // console.log(id)
        axios.post("http://localhost:9002/admin-verify", { id: id }).
            then(res => {
                alert(res.data.message);
                window.location.reload(false);
           })
    }

    return (
        <>
            <div className="DoctorCard" >
                <div className="box">
                <div className="photo">
                    <p>photo</p>
                </div>
                <div className="info">
                    <p>Name: {props.fname + " " + props.lname} </p> 
                    <p>Specialization: {props.specialization}</p>
                    <p>email: {props.email}</p>
                    <p>Medical School: {props.medicalSchool}</p>
                    <p>Medical ID: {props.medicalID}</p>
                    <p>City: {props.city}</p>
                </div>
                </div>
                <button onClick={verify}>verify</button>
           </div>
        </>
    )
}

export default DoctorCard