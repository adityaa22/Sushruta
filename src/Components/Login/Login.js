import React, {useEffect, useState} from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Login = () => {
    
    const navigate = useNavigate();
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    // useEffect(() => {
    //     console.log(user) 
    // },[user])

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        if (user.email && user.password) {
            axios.post("http://localhost:9002/Login", user)
            .then((res) => {
                if (res.data.user) {
                    localStorage.setItem('token', res.data.user._id)
                    alert(res.data.message)
                    navigate('/user-homepage')
                }
                else if (res.data.doctor) {
                    localStorage.setItem('token', res.data.doctor._id)
                    alert(res.data.message)
                    navigate('/doctor-homepage')
                }
                else if (res.data.admin) {
                    localStorage.setItem('token', res.data.admin._id)
                    alert(res.data.message)
                    navigate('/admin')
                }
                else {
                    alert(res.data.message)
                }
            })
        } else {
            alert("Please fill in the Login Details to sign in")
        }
        
    }
    const  reg = () => {
        navigate("/register")
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input autoComplete="off" type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input autoComplete="off" type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={reg}>Register</div>
        </div>
    )
}

export default Login