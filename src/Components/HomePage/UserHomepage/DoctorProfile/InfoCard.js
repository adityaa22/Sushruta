import React from "react";
import "./infoCard.css"

const InfoCard = (props) => {
    return(
        <>
            <div className="infoCard">

                 <div className="infoDoctor">
                    <p>Name: {props.Name} </p> 
                    <hr />
                    <p>Specialization: {props.specialization}</p>
                    <hr />
                    <p>email: {props.email}</p>
                    <hr />
                     <p>City: {props.city}</p>
                 </div>
            </div>
        </>
       
    )
}

export default InfoCard
