import React from 'react';
import './Button.css';

// const ActionButton = () => {
//     return(
//         <div className="action-button">
//          <button className="big-button" id="clear">CLEAR</button>
//             <button className="small-button" id="div"> / </button>
//             <button className="small-button" id="mult"> x </button>
//             <button className="small-button" id="sub"> - </button>
//             <button className="small-button" id="add"> +</button>
//             <button className="small-button" id="equ"> = </button>
//             <button className="big-button" id="zero"> 0 </button>       
//         </div>
//     )
// }
const ActionButton = (props) => {
    return(
        <div className="action-button">
        <button className={`big-button`}>{props.text}</button>   
        </div>
    )
}


export default ActionButton;