import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props){
const [unit, setUnit] = useState("celsius");
function showRahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
};
function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}
function fahrenheit(){
    return Math.round(props.temp *9/5)+32;
}
if (unit === "celsius"){
    return(
        <div className="Temperature ">
        <strong className="current-temp">{props.temp}{" "} </strong>
        <a href="/" className="text-decoration-none" onClick={showCelsius}>℃</a> 
        <span className="line">| </span> 
        <a href="/" className="text-decoration-none" onClick={showRahrenheit}>°F</a>
       
        </div>
    )} else {
    return(
        <div className="Temperature ">
        <strong className="current-temp">{fahrenheit()}</strong>
        <a href="/" className="text-decoration-none" onClick={showCelsius}>℃</a> 
        <span className="line"> | </span> 
        <a href="/" className="text-decoration-none" onClick={showRahrenheit}>°F</a>
        </div>
    )
}  
}