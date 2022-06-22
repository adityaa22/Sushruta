import React from "react";
import "./Register.css"
import { useNavigate } from 'react-router-dom';
const  Register = () => {
    const navigate = useNavigate();
    const logg = () => navigate("/Login") 
    const rgp = () => navigate("/register-patient")
    const rgd = () => navigate("/register-doctor")
return (
    <>
            <div className="Register">
            <div className="button" onClick={rgd}>Get Verified as a Doctor</div>
            <div>or</div>
            <div className="button" onClick={rgp}>Register as a Patient</div>
            <div>or</div>  
            <div className="button" onClick={logg}>Login</div>
            </div>
        </>
    )
}

export default Register