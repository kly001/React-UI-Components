import React from 'react';
import './Header.css';


function HeaderTitle() {
    let d = new Date();
   console.log(d)
    return (
        <div className="headerTitle">
        <h1>Lambda School</h1>
        <p> @lambda School</p>
        <p> 27 Feb </p>
        </div>
    )
}
export default HeaderTitle;