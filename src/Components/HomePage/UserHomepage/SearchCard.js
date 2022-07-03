import React, { useEffect, useState } from "react";
import './SearchCard.css';
import {Link, useNavigate} from "react-router-dom"

const SearchCard = (props) => {
    const navigate = useNavigate();
    // console.log(props.username)
    const Name = props.fname + " " + props.lname
    const doctorProfile = () => navigate("/doctor-profile",{state:{id:props.id,name: Name,email:props.email,city:props.city,specialization: props.specialization,useremail:props.useremail,username:props.username,userid:props.userID}}) 
    return (
        <>
            <div className="SearchCard" onClick={() => { doctorProfile() }}>
                <div className="info">
                    <p>Name: {Name} </p> 
                    <p>Specialization: {props.specialization}</p>
                    <p>City: {props.city}</p>
                </div>
           </div>
        </>
    )
}

export default SearchCard