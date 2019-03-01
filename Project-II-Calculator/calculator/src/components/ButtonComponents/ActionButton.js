import React from 'react';
import './Button.css';

const ActionButton = () => {
    return(
        <div className="action-button">
         <h2 className="big-button" id="clear">CLEAR</h2>
            <h2 className="small-button" id="div"> / </h2>
            <h2 className="small-button" id="mult"> x </h2>
            <h2 className="small-button" id="sub"> - </h2>
            <h2 className="small-button" id="add"> +</h2>
            <h2 className="small-button" id="equ"> = </h2>
            <h2 className="big-button" id="zero"> 0 </h2>       
        </div>
    )
}
export default ActionButton;