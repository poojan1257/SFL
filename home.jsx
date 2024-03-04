import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";

const home = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    './images/rectangle-3-bg.png',
    './images/rectangle-8-bg-LK9.png',
    './images/rectangle-13-bg-SCf.png',
    // Add more image paths as needed
  ];

  const ringDataSet = [
    './images/ring1.png',
    './images/ring2.png',
    './images/ring3.png',
    './images/ring4.png',
    './images/ring5.png',
    './images/rectangle-8-bg-LK9.png'
  ];

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };



  return (
    <div className="f12 white">
      <div>
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
  <div className="textOverlay f24 primary">OUR COLLECTIONS</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
        <div className="flex flex-space-evenly mt-3">
          <div className="flex g2">
          <div className="ringImg"></div>
        <div className="customImg"></div>
        <div className="couplesImg"></div>
        <div className="zodiacImg"></div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <img src="./images/home1Banner.svg" alt="" className="homeBanner" />
      </div>
      <div className="bg-black pd-4">
      <div className="flex flex-space-evenly primary">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">OUR PRODUCTS</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
        <div className="homeOurProductsOuterLayer flex-wrap g2 flex-center flex  mt-2">
        {ringDataSet.map((imagePath, index) => (
        <div className="productCard bg-secondary">
                <div className="imageLayout">
                  <img src={imagePath} key={index} className="prodcutImage" alt="" />
                  <div className="overlay">
                  <img src="./images/whishListLikeOutline.svg" className="hrqlk" alt="" />
                </div>
                </div>
                <div className="pd-2">
                  <div className="white fw-600 f14">Gold</div>
                  <div className="white mt-1 f10">
                    Shimmering circles of eternity, each gleam a story untold
                  </div>
                  <div className="fw-600 white mt-2 f16">₹10000</div>
                  <div className="flex flex-space-evenly bg-primary pd-1 mt-2 border-radius-05 white fw-600">
                    Book Now
                  </div>
                </div>
              </div>
        ))}
        </div>
        <div className="mt-4">
           <div className="flex flex-space-evenly">
           <div className="SeeMoreProductPage primary fw-600 f14">See More</div>
           </div>
          </div>
      </div>
      <div className="bg-black">
        <img src="./images/homeBanner2.svg" alt="" className="homeBanner" />
      </div>
      <div className="bg-black pd-4">
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
    </div>
  )
}

export default home