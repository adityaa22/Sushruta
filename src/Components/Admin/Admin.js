import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import './Admin.css'
import axios from "axios"



const Admin = () => {
    const [unverifiedDoctors, setunverifiedDoctors] = useState([])
    
    useEffect(() => {
        axios.post("http://localhost:9002/admin", { key:''}).
        then(result => {
            // console.log(result.data)
            setunverifiedDoctors(
                result.data   
            )
        }).
        catch(err => console.log(err))
    },[])
    // useEffect(() => {
    //     console.log(unverifiedDoctors)
    // },[unverifiedDoctors]) 
    return (
        <>
            <div className="Admin">
                <div className="List">
                   {
                        unverifiedDoctors.map((val) => {
                            return (
                                <>
                                    <DoctorCard
                                      key ={val._id}
                                      id= {val._id}
                                      fname={val.fname}
                                      lname={val.lname}
                                      email={val.email}
                                      specialization={val.specialization}
                                      medicalSchool={val.medicalSchool}
                                      medicalID={val.medicalID}
                                      city={val.city}
                                    />
                               </>
                           )
                        })
                   }
                </div>
           </div>
           
        </>
    )
}

export default Admin