import React, { useEffect, useState } from "react";
import './AppointmentRequestCard.css';

const AppointmentRequestCard = (props) => {  

    return (
        <>
            <div className="AppointmentRequestCard">
                <div className="information">
                    <p>Name: {props.name} </p> 
                    <div className="desc">
                        <p>Description:</p> <p style={{ marginLeft: "10px", wordBreak: "break-word" }}>{ props.description }</p>
                    </div>
                        
                    <p>Preferred Date: {props.date} </p>
                </div>
                <div className="AC-RJ">
                    <button>Accept</button>
                    <button>Reject</button>
                </div>
           </div>
        </>
    )
}

export default AppointmentRequestCard