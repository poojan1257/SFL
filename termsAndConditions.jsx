import React, { useState, useEffect } from "react";

const termsAndConditions = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
      './images/rectangle-3-bg.png',
      './images/rectangle-8-bg-LK9.png',
      './images/rectangle-13-bg-SCf.png',
      // Add more image paths as needed
    ];
  
    const handleImageChange = (index) => {
      setCurrentImage(index);
    };
  return (
    <div className="f12 white">
          <div className="productCarouselSection">
      <img
        src={images[currentImage]}
        className="productCarousel"
        alt={`Product ${currentImage + 1}`}
      />

<div className="flex flex-space-evenly mt-1">
<div className="flex g1">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageChange(index)}
            className={index === currentImage ? 'bg-primary trackerQca c-pinter ' : 'acuwqc trackerQca c-pointer'}
          >
       
          </div>
        ))}
      </div>
</div>
    </div>
          <div className="bg-black pd-4">
      <div className="flex flex-space-evenly primary">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">TERMS & CONDITIONS</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
        <div className="flex flex-space-evenly">
            <img src="./images/termsAndConditions.svg" className="jxewiyqgfe" alt="" />
        </div>
      </div>
    </div>
  )
}

export default termsAndConditions