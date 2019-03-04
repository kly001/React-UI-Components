import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return(
        <div className="action-button">
        <button className={`big-button`}>{props.text}</button>   
        </div>
    )
}

const mathSymbol = [
    {symbol:"/"},
    {symbol:"x"},
    {symbol:"-"},
    {symbol:"+"},
    {symbol:"="},
]
console.log(mathSymbol)



export default ActionButton;