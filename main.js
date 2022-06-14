import React from "react";
 import map from "./Fill 219.png"
export default function main(props)
{
    console.log(props)
return(
 
<div className="Main--content">
    <div className="image--div">
    <img src={props.imageUrl}  className="image"/>
        <img src={map}  className="map"/>
        <span className="country">{props.location}</span>
        <span className="googleMap"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
        <div className="title">
        <h3>{props.title}</h3>
        </div>
        <div className="dates">
            <span>{props.startDate}-{props.endDate}</span>
        </div>
        <p className="content">{props.description}</p>
       
    </div>
 



</div>
    
)







}