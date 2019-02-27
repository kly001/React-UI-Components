import React from "react";
import "./Footer.css";

function FooterContainer() {
    return (
        <div className="footerIcons">
         <a className="comment"href="#"><i class="fa fa-comment"></i></a>
         <a className="refresh"href="#"><i class="fa fa-retweet"></i></a>
         <a className="like"href="#"><i class="fa fa-heart"></i></a>
         <a className="email"href="#"><i class="fa fa-envelope"></i></a>   
        </div>
    )
}
export default FooterContainer;