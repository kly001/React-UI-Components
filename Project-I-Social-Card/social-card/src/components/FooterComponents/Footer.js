import React from "react";
import "./Footer.css";

function FooterContainer() {
    return (
        <div className="footerIcons">
         <a className="comment"href=""><i className="fa fa-comment"></i></a>
         <a className="refresh"href=""><i className="fa fa-retweet"></i></a>
         <a className="like"href=""><i className="fa fa-heart"></i></a>
         <a className="email"href=""><i className="fa fa-envelope"></i></a>   
        </div>
    )
}
export default FooterContainer;