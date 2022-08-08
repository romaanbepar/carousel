import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./Assets/image1.png"
import image2 from "./Assets/image2.png"


const Carousel = () => {
  return (
    <>
    <h1>flipkart slider</h1>
    <Slider>
        <div>
            <img src={image1} alt="image"  />
        </div>

        <div>
            <img src={image2} alt="image" />
        </div>
        
        </Slider>  
    </>
  )
}

export default Carousel