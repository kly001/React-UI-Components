import React from "react";
import "./Button.css";

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";



const ButtonContainer = () => {
    return (
        <div className="buttonContainer">
           
        <NumberButton text="CLEAR" big="large"/>
        <ActionButton text="/" />
        <NumberButton text="9"/>
        <NumberButton text="8"/>
        <NumberButton text="7"/>
        <ActionButton text="x"/>
          
        <NumberButton text="6"/>
        <NumberButton text="5"/>
        <NumberButton text="4"/>
        <ActionButton text="-"/>
       

        <NumberButton text="3"/>
        <NumberButton text="2"/>
        <NumberButton text="1"/>
        <ActionButton text="+"/>
       
        <NumberButton text="0" big="large"/> 
        <ActionButton text="="/>
        </div>
    )
}


export default ButtonContainer;
