import React, { useState } from "react"
import "./RegisterPatient.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const RegisterPatient = () => {
    
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const Register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password  && (password===reEnterPassword)) {
            axios.post("http://localhost:9002/register-patient", user)
            .then ( res =>  console.log(res))
        } 
    }
    const log = () => navigate("/Login")
    return (
        <div>
            <form  className="registerPatient">
            <h1>Register as Patient</h1>

            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input> 
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>

            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="btn">
                <div className="button" onClick={Register} >Register</div>
                <div>or</div>
                <div className="button" onClick={log}>Login</div>
            </div>
              
            </form>
        </div>
    )
}

export default RegisterPatient