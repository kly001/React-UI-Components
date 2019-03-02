import React from 'react';
import './Button.css';

// const NumberButton = () => {
//     return(
//        <div className="numberButton">
//             <button className="small-button" id="nine">9</button> 
//             <button className="small-button" id="eight">8</button> 
//             <button className="small-button" id="seven">7</button> 
//             <button className="small-button" id="six">6</button> 
//             <button className="small-button" id="five">5</button> 
//             <button className="small-button" id="four">4</button> 
//             <button className="small-button" id="three">3</button> 
//             <button className="small-button" id="two">2</button> 
//             <button className="small-button" id="one">1</button> 
//         </div>
//     )
// }



 


const NumberButton = (props) => {
    return (
        <div className="number-button">
        <button className={`white-button ${props.big}`}>{props.text}</button>
        </div>
    )
}

export default NumberButton;