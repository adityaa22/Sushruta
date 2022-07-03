import React from "react";
import "./PictureCard.css"

const PictureCard = (props) => {
    return(
        <>
            <div className="pictureCard">
                <div className="picBox"><img src="https://picsum.photos/700/800"/> </div>
                <button>Connect</button>
            </div>
        </>
       
    )
}

export default PictureCard
