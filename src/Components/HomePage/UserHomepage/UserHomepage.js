import React, { useState, useEffect } from "react";
import "./UserHomepage.css"
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const UserHomepage = () => {
    
    const navigate = useNavigate();
    const acAppoint = () =>  navigate("/active-appointments")
    const prevAppoint = () => navigate("/prev-appointments")
    const notifications = () => navigate("/notifications")
    const [id, setId] = useState();
    
    const [Name, setName] = useState();
    const [email, setEmail] = useState();
    const search = () => navigate("/search-doctors",{state:{id:id,name:Name,email:email}})
    useEffect(() => {
        setId(localStorage.getItem('token'));  
    },[])
    if (id) {
        const user = {
            key: id
        }
        axios.post("http://localhost:9002/user-homepage", user)
            .then((res) => {
                setName(res.data.name)
                setEmail(res.data.email)
            })
    }
return (
    <>
        <div className="userHomepage">
            <h1>Welcome {Name}</h1>
            <div className="button" onClick={acAppoint}>Check Active appointments</div>
            <div>or</div>
            <div className="button" onClick={prevAppoint}>Check Previous appointments</div>
            <div>or</div>  
            <div className="button" onClick={() => { search() }}>Search Doctors</div>
            <div>or</div>  
            <div className="button" onClick={notifications}>Notifications</div>
        </div>
        </>
    )
}

export default UserHomepage