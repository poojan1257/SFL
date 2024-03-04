import React, { useState, useEffect } from "react";

const savingPlan = () => {
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
  <div className="textOverlay f24 primary">SAVINGS PLAN</div>
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
            </div>
        </div>

      </div>
      <div className="bg-black">
        <div className="flex flex-space-between">
            <img src="./images/money2.png" className="imgSave" alt="" />
            <img src="./images/savingPlanBannger2.svg" className="hswgdkqq" alt="" />
        </div>
        {/* <div className="customShapeBox bg-primary white">lorem100</div> */}
      </div>
      <div className="bg-black pd-4 ">
      <div className="text-align-center f24 primary">11 Months installments(Rs. 1000 as example)</div>
      <div className="text-align-center f18 white mt-1">*Services are optional not mandatory</div>
      <div className="pd-5">
      <div className="bg-primary pd-3  border-radius-2">
        <div className="flex g1 align-item-center">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 1 (Each month ₹1000)</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">*ration - worth ₹3000 (Silver pack) or ₹5000 (Gold pack)</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 3 = ₹1000</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">*20 Times PL or education Loan</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 5 = ₹1000</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">*home appliances upto ₹50.000(no cash)</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 7 = ₹1000</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 8 = ₹1000</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 9 = ₹1000</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Month 10 = ₹1000</div>
        </div>
        <div className="flex g1 align-item-center mt-1">
            <img src="./images/handSign.png" alt="" className="handSignImg" />
            <div className="black f14 fw-600">Pay you ₹11,000 company pays ₹1000. total = ₹12,000 refund</div>
        </div>
      </div>
      </div>
      <div className="text-align-center secondary f14 fw-600">or</div>
      <div className=" flex flex-space-evenly">
     <img src="./images/savingPlanBanner.svg" alt="" className="jcdfueiwg" />
      </div>
    </div>
    </div>
  )
}

export default savingPlan