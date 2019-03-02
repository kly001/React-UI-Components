import React from "react";
import "./Button.css";

import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const ButtonContainer = () => {
    return (
        <div className="button-container">
           
        <ActionButton text="CLEAR"/>
        <NumberButton text="/" color="red"/>
        
        <NumberButton text="9"/>
        <NumberButton text="8"/>
        <NumberButton text="7"/>
        <NumberButton text="x" color="red"/>
        
        <NumberButton text="6"/>
        <NumberButton text="5"/>
        <NumberButton text="4"/>
        <NumberButton text="-" color="red"/>
       
        <NumberButton text="3"/>
        <NumberButton text="2"/>
        <NumberButton text="1"/>
        <NumberButton text="+" color="red"/>
       
        <ActionButton text="0"/> 
        <NumberButton text="=" color="red"/>
       </div>
    )
}


export default ButtonContainer;
