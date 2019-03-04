import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return (
        <div className="number-button">
        <button className={`small-button ${props.color}`}>{props.text}</button>
        </div>
    )
}

export default NumberButton;