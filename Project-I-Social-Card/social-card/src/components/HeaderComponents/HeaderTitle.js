import React from 'react';
import './Header.css';


const HeaderTitle = () => {
    let Today = new Date();
   
    return (
        <div className="headerTitle">
        <h1>Lambda School</h1>
        <p> @lambda School</p>
        <div className="dot"> . </div>
        <p>{Today.toDateString()}</p>
    
        </div>
    )
}
export default HeaderTitle;