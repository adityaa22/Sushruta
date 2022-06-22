import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import RegisterPatient from './Components/RegisterPatient/RegisterPatient';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterDoctor from './Components/RegisterDoctor/RegisterDoctor';
import UserHomepage from './Components/HomePage/UserHomepage/UserHomepage';
import Admin from './Components/Admin/Admin';
import DoctorHomepage from './Components/HomePage/DoctorHomepage/DoctorHomepage';

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-patient" element={<RegisterPatient />} />
            <Route path="/register-doctor" element={<RegisterDoctor />} />
            <Route path="/user-homepage" element={<UserHomepage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/doctor-homepage" element={<DoctorHomepage />} />
          </Routes>
        </Router>
    </div>
    </>
  )
}

export default App;