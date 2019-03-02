import React from "react";
import "./Button.css";

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";



const ButtonContainer = () => {
    return (
        <div className="buttonContainer">
        <ActionButton text="/" />
        <ActionButton text="x"/>
        <ActionButton text="-"/>
        <ActionButton text="+"/>
        <ActionButton text="="/>

        <NumberButton text="9"/>
        <NumberButton text="8"/>
        <NumberButton text="7"/>
        <NumberButton text="6"/>
        <NumberButton text="5"/>
        <NumberButton text="4"/>
        <NumberButton text="3"/>
        <NumberButton text="2"/>
        <NumberButton text="1"/>
        <NumberButton text="0"/>
        <NumberButton text="CLEAR"/>
        
        
        </div>
    )
}


export default ButtonContainer;
