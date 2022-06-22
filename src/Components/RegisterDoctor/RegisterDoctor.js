import React, { useState } from "react"
import "./RegisterDoctor.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
const RegisterDoctor = () => {
    
    // const navigate = useNavigate();
    const [ doctor, setDoctor] = useState({
        fname: "",
        lname:"",
        email:"",
        password:"",
        medicalSchool: "",
        medicalID: "",
        specialization: "",
        city: "",
        
        reEnterPassword: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setDoctor({
            ...doctor,
            [name]: value
        })
    }
    
    const Register = () => {
        const { fname , lname, email , password ,  medicalSchool, medicalID, specialization, city, reEnterPassword } = doctor
        if (fname && lname && email && password  && medicalID && medicalSchool && specialization && city  && (password===reEnterPassword)) {
            axios.post("http://localhost:9002/register-doctor", doctor)
            .then ( res =>  alert(res.data.message))
        } 
    }
    // const log = () => navigate("/Login")
    return (
        <div className="main">
            <form  className="register">
            <h1>Register as Doctor</h1>
        <div  className="col">
            <div>
                <input type="text" name="fname" value={doctor.fname} placeholder="First Name" onChange={ handleChange }></input>
                <input type="text" name="medicalSchool" value={doctor.medicalSchool} placeholder="Medical School" onChange={handleChange}></input> 
            </div>
            <div>
                <input type="text" name="lname" value={doctor.lname} placeholder="Last Name" onChange={handleChange}></input>
                <input type="text" name="medicalID" value={doctor.medicalID} placeholder="Medical ID" onChange={handleChange}></input> 
            </div>
        </div>
                <input type="text" name="specialization" value={doctor.specialization} placeholder="Specialization" onChange={handleChange}></input> 
                <input type="text" name="city" value={doctor.city} placeholder="City" onChange={handleChange}></input> 
                <div className="upload">
                  <div className="uploadimg">
                    <p>Upload Your Medical ID</p>
                        <FileBase64
                         multiple={ false }
                            onDone={(base64) => {
                                setDoctor({
                                    ...doctor,
                                    imageID: base64
                                })
                         }} />
                    <button type="button">Upload</button>
                 </div>
                 <div className="uploadimg"> 
                    <p>Upload Your personal image</p>
                    <FileBase64
                         multiple={ false }
                            onDone={(base64) => {
                                setDoctor({
                                    ...doctor,
                                    imageDP: base64
                                })
                                console.log(doctor)
                         }} />
                    <button type="button">Upload</button>
                  </div>
                </div>
                <input type="text" name="email" value={doctor.email} placeholder="Your Email" onChange={handleChange}></input> 
                <input type="password" name="password" value={doctor.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={doctor.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="btn">
                <div className="button" onClick={Register}>Register</div>
            </div>
              
            </form>
        </div>
    )
}

export default RegisterDoctor