import React, { useState, useEffect } from "react";

const goldLoans = () => {
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
    <div className="f12">
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
      <div className="bg-black pd-4" >
      <div className="flex flex-space-evenly primary">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">GOLD LOANS</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>

      
        </div>
        <div className="flex flex-space-evenly mt-4">
            <div style={{textAlign:'center'}}>
            <div className="white f18 fw-600">SFL Mahila Jewellers Savings & Service Plan </div>
            <div className="white f14 mt-1 qe4ad">
            <div>We invite you to be a part of the SFL Mahila Jewellers family—a community that celebrates your
 individuality, embraces your aspirations, and empowers you to shine in every facet of your life.
 Explore our collection, embark on a journey of financial growth with our saving schemes, and let
 us be your trusted companions in creating memories that last a lifetime.</div>
            </div>
            <div className="primary f14 mt-1 qe4ad fw-600">
            Thank you for choosing SFL Mahila Jewellers, where every piece tells a story, and every saving
paves the way for a brighter future.

            </div>
            <button className="bookNowBtn bg-primary white fw-600 mt-4 f12 yaj2f">Apply Now</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default goldLoans