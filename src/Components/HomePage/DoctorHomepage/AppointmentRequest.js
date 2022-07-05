import React, { useEffect, useState } from "react";
import axios from "axios"
import "./AppointmentRequest.css"
import AppointmentRequestCard from "./AppointmentRequestCard"

const AppointmentRequest = () => {
    const [appointmentList, setAppointmentList] = useState([])
    const [id, setId] = useState()
    useEffect(() => {
        setId(localStorage.getItem('token'));  
    }, [])
    
    useEffect(() => {
        if (id) {
            axios.post("http://localhost:9002/appointment-request", {id: id})
            .then(result => {
                setAppointmentList(result.data.appointmentRequest)
            }).
            catch(err => console.log(err))
        } 
    }, [id])
  
    return (
        <>
            <div className="AppointmentRequest">
                <div className="List">
                    {
                        appointmentList.map((val,index) => {
                            return (
                                <>
                                    <AppointmentRequestCard
                                    docID={id}
                                    num={index}
                                    name = {val.name}
                                    email = {val.email}
                                    description = {val.description}
                                    date = {val.date}
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

export default AppointmentRequest