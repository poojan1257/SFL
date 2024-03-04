import React, { useState, useEffect } from "react";

const referEarn = () => {
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
      <div className="bg-black pd-4">
      <div className="flex flex-space-evenly primary">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">REFER & EARN</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>

      
        </div>
        <div className="flex flex-space-evenly mt-4">
            <div style={{textAlign:'center'}}>
            <div className="white f18 fw-600">SFL Mahila Jewellers Refer & Earn </div>
            <div className="white f14 mt-1 qe4ad">
            <div>Explanation of the referral program. how customers can refer friends and earn rewards. clear call-to-action for joining the referral program.</div>
            </div>
            </div>
        </div>
        <div className="flex flex-space-evenly mt-4">
            <img src="/images/referEarnProgram.svg" alt="" className="referEarnPic"/>
        </div>
        <div className="flex flex-space-evenly mt-4">
        <div className="text-align-center white f14 mt-1 qe4ad">
            <div>Explanation of the referral program. how customers can refer friends and earn rewards. clear call-to-action for joining the referral program.</div>
            </div>
        </div>
        <div className="flex flex-space-evenly f16 fw-600 primary mt-2">Your Referral Code</div>
        <div className="flex flex-space-evenly mt-2">
        <div className="referalIdBox  bg-secondary border-radius-05 flex flex-space-between align-item-center">
            <div className="white fw-600 f16">675342</div>
            <div className="jay6a">
                <img src="./images/copyBtn.svg" className="c-pointer sdjfwfx" alt="" />
            </div>
        </div>
        </div> 
        <div className="flex flex-space-evenly">
        <button className="bookNowBtn bg-primary white fw-600 mt-2 f12 yaj2f c-pointer">Invite Friends</button>
        </div>
      </div>
    </div>
  )
}

export default referEarn