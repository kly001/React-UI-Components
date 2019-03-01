import React from 'react';
import './Card.css';

// function CardBanner() {
    //NOTE: Changed all functions to arrow syntax.
    
    const CardBanner = () => {
    return(
        <div className="bannerLink">
        <a className="cardBannerLink" href="https://www.reactjs.org">
        <img className="bannerImage" src=" https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="Banner"></img>
        </a>  
        </div>
    )
}
export default CardBanner;