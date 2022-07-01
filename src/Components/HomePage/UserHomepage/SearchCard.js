import React, { useEffect, useState } from "react";
import './SearchCard.css';
import {useNavigate} from "react-router-dom"

const SearchCard = (props) => {
    const navigate = useNavigate();
    const doctorProfile = () => navigate("/doctor-profile") 
    return (
        <>
            <div className="SearchCard" onClick={doctorProfile}>
                <div className="info">
                    <p>Name: {props.fname + " " + props.lname} </p> 
                    <p>Specialization: {props.specialization}</p>
                    <p>City: {props.city}</p>
                </div>
           </div>
        </>
    )
}

export default SearchCard