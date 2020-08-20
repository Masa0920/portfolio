import React from 'react'
import "../static/css/SimpleSlider.css"
import Slider from "react-slick"
import iroasu1 from "../static/images/iroasufire.png"
import iroasu2  from "../static/images/iroasuhome.png"
import iroasu3 from "../static/images/iroasumizu.jpg"
import aftergrow from "../static/images/aftergrow.png"
import iroasu4 from "../static/images/iroasubi.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {

   const settings = {
      // dots: true,
      infinite: true,
      speed: 2000, 
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   return (
      <div className="simpleslider" >
         <Slider {...settings}>
            <div> <img src={iroasu1} alt="" /> </div>
            <div> <img src={iroasu2} alt="" /> </div>
            <div> <img src={iroasu3} alt="" /> </div>
            <div> <img src={iroasu4} alt="" /> </div>
            <div> <img src={aftergrow} alt="" /> </div>
         </Slider>
      </div>
   )
}


export default SimpleSlider