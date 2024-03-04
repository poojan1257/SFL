import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const howItWorks = () => {
  const navigate = useNavigate();
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
    <div className='f12'>
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
  <div className="textOverlay f24 primary">HOW IT WORKS</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
        <div className="flex flex-space-evenly mt-4">
            <img src="./images/howItWorksFlow.svg" className="howItWorksFlow" alt="" />
        </div>
        <div className="flex flex-space-evenly mt-4 ">
            <div className="white jaki f14" style={{textAlign:'center'}}>Thank you for choosing SFL Mahila Jewellers, where every piece tells a story, and every saving
paves the way for a brighter future.
</div>
        </div>

        <div className="flex flex-space-evenly primary mt-4">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">OUR FEATURES</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
        <div className="flex flex-space-evenly align-item-center mt-4">
           <div className="flex g1 align-item-center">
           <div className="hiwTestsmBox bg-secondary flex flex-space-evenly"  onClick={() => navigate("/goldLoans")}>
            <div>
            <div className="white fw-600 f16 text-align-center mt-2">LOANS</div>
            <img src="./images/money1.png" className="hiwTestimg1 mt-4" alt="" />
            </div>
           </div>
            <div className="hiwTestsmBoxLarge bg-secondary flex flex-space-evenly"  onClick={() => navigate("/savingPlan")} >
            <div>
            <div className="white fw-600 f16 text-align-center mt-3">SAVINGS</div>
            <img src="./images/money2.png" className="hiwTestimg3 mt-5" alt="" />
            </div>
            </div>
            <div className="hiwTestsmBox bg-secondary flex flex-space-evenly"  onClick={() => navigate("/referEarn ")}>
            <div>
            <div className="white fw-600 f16 text-align-center mt-2">REFER & EARN</div>
            <img src="./images/money3.png" className="hiwTestimg3 mt-5" alt="" />
            </div>
            </div>
           </div>

        </div>


        <div className="flex flex-space-evenly primary mt-4">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">TESTIMONIALS</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
        <div className="flex flex-space-evenly mt-4">
            <div className="f18 white fw-600">Our Client Review</div>
        </div>
        <div className="flex flex-space-evenly mt-3">
           <div className="flex flex-wrap g4 " style={{width:'83vw'}}>
           {Array.from({ length: 6 }, (_, index) => (
           <div className="ourClinetReviewLayout">
                <div className="flex flex-space-evenly">
                    <div className="clientCircleImgLayout bg-white"></div>
                </div>
                <div className="clientInfoLayer flex flex-space-evenly bg-secondary">
                    <div style={{textAlign:'center'}}>
                    <div className="mt-5 f16 white fw-600">Jackson</div>
                    <div className="mt-1 u62g f12 white">Crafted with love, adorned 
                                    with dreams. Crafted with love, adorned with dreams.</div>
                    <div className="flex flex-space-evenly mt-2">
                    <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />

                    </div>
                    </div>
                </div>
            </div>
           ))}
           </div>
        </div>
      </div>
    </div>
  )
}

export default howItWorks