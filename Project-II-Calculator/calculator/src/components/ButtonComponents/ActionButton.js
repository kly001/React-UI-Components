import React from 'react';
import './Button.css';

const ActionButton = () => {
    return(
        <div className="actionButton">
         <h2 className="big-button">CLEAR</h2>
            <h2 className="small-button"> /</h2>
            <h2 className="small-button"> x</h2>
            <h2 className="small-button"> -</h2>
            <h2 className="small-button"> +</h2>
            <h2 className="small-button"> =</h2>
            <h2 className="big-button"> 0 </h2>       
        </div>
    )
}
export default ActionButton;