import React from 'react';
import './Button.css';

const NumberButton = () => {
    return(
       <div className="numberButton">
            <h3 className="small-button" id="nine">9</h3> 
            <h3 className="small-button" id="eight">8</h3> 
            <h3 className="small-button" id="seven">7</h3> 
       
       
            <h3 className="small-button" id="six">6</h3> 
            <h3 className="small-button" id="five">5</h3> 
            <h3 className="small-button" id="four">4</h3> 
    
        
            <h3 className="small-button" id="three">3</h3> 
            <h3 className="small-button" id="two">2</h3> 
            <h3 className="small-button" id="one">1</h3> 
        </div>
    )
}
export default NumberButton;