import React from "react";
import "./Footer.css";

function FooterContainer() {
    return (
        <div className="footerIcons">
         <a className="comment"href=""><i className="fa fa-comment-o"></i></a>
         <a className="refresh"href=""><i className="fa fa-refresh"></i></a>
         <a className="like"href=""><i className="fa fa-heart-o"></i></a>
         <a className="email"href=""><i className="fa fa-envelope-o"></i></a>   
        </div>
    )
}
export default FooterContainer;