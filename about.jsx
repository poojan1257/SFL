import React, { useState, useEffect } from "react";

const about = () => {
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
    <div className="white f12">
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
            <img
              src="./images/bgyellowfade.png"
              alt=""
              className="bgYellowimg"
            />
            <div className="textOverlay f24 primary">ABOUT SFL MAHILA</div>
            <div className="flex flex-space-evenly">
              <img src="./images/toppng-2.png" alt="" className="topPng" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-end">
        <img src="./images/aboutBanner1.svg" alt="" className="aboutBanner" />
      </div>
      <div className="bg-black pd-4">
        <div className="flex flex-space-evenly primary">
          <div className="imageContainer">
            <img
              src="./images/bgyellowfade.png"
              alt=""
              className="bgYellowimg"
            />
            <div className="textOverlay f24 primary">OUR SUCCESS</div>
            <div className="flex flex-space-evenly">
              <img src="./images/toppng-2.png" alt="" className="topPng" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap g3 flex-space-evenly pd-4">
   
        <div className="ImageContainerAbout bg-secondary">
        <img src="./images/aboutOurSuccess.png" alt="Your Image" className="hoverImageAbout" />
        <div className="colorBox pd-1">
          <div className="text-align-center f16 secondary fw-600 mt-2">Our Vision</div>
          <div className="text-align-center mt-1 secondary f12">
          SFL Mahila Jewellers was born from a commitment to celebrate the essence of womanhood
 and empower women in their pursuit of financial independence. We envision a world where
 every woman can adorn herself with exquisite gold ornaments while simultaneously building a
 secure and prosperous future.
          </div>
        </div>
        <div className="pd-1 fw-600 f14 text-align-center">
          Our Vision
        </div>
      </div>
      <div className="ImageContainerAbout bg-secondary">
        <img src="./images/aboutOurSuccess1.png" alt="Your Image" className="hoverImageAbout" />
        <div className="colorBox pd-1">
          <div className="text-align-center f16 secondary fw-600 mt-2">Tradition Meets Innovationn</div>
          <div className="text-align-center mt-1 secondary f13">
          Our collection of gold ornaments is a testament to the rich heritage of Indian craftsmanship.
Each piece is meticulously crafted to blend tradition with innovation, creating jewellery that not
only reflects timeless beauty but also resonates with the spirit of the modern woman.
          </div>
        </div>
        <div className="pd-1 fw-600 f14 text-align-center">
        Tradition Meets Innovation
        </div>
      </div>
      <div className="ImageContainerAbout bg-secondary">
        <img src="./images/aboutOurSuccess2.png" alt="Your Image" className="hoverImageAbout" />
        <div className="colorBox pd-1">
          <div className="text-align-center f16 secondary fw-600 mt-2">Customer-Centric Approach</div>
          <div className="text-align-center mt-1 secondary f13">
          At the heart of our philosophy is a commitment to our customers. We believe in fostering meaningful relationships by delivering a personalized and delightful shopping experience. From
helping you choose the perfect piece of jewelry to guiding you through our innovative saving
schemes, our dedicated team is here for you every step of the way. 
          </div>
        </div>
        <div className="pd-1 fw-600 f14 text-align-center">
        Customer-Centric Approach
        </div>
      </div>
      <div className="ImageContainerAbout bg-secondary">
        <img src="./images/aboutOurSuccess3.png" alt="Your Image" className="hoverImageAbout" />
        <div className="colorBox pd-1">
          <div className="text-align-center f16 secondary fw-600 mt-2">Transparent And Trustworthy</div>
          <div className="text-align-center mt-1 secondary f13">
          Transparency and trust form the cornerstone of our business. Whether you are exploring our
 gold collection or participating in our saving schemes, you can rest assured that our processes
 are transparent and designed with your best interests in mind. We believe in building lasting
 relationships built on honesty and integrity.  
          </div>
        </div>
        <div className="pd-1 fw-600 f14 text-align-center">
        Transparent And Trustworthy
        </div>
      </div>
      <div className="ImageContainerAbout bg-secondary">
        <img src="./images/aboutOurSuccess4.png" alt="Your Image" className="hoverImageAbout" />
        <div className="colorBox pd-1">
          <div className="text-align-center f16 secondary fw-600 mt-2">Gold saving Schemes</div>
          <div className="text-align-center mt-1 secondary f13">
          Our Gold Saving Schemes are crafted to cater to the diverse needs of our customers. From the
flexibility of the Gold Saving Scheme Monthly to the focused approach of the Gold Saving Plan
11 Months, we offer smart and innovative solutions that align with your financial goals. 
          </div>
        </div>
        <div className="pd-1 fw-600 f14 text-align-center">
        Gold saving Schemes
        </div>
      </div>
       
        </div>
        <div className="flex flex-space-evenly primary">
          <div className="imageContainer">
            <img
              src="./images/bgyellowfade.png"
              alt=""
              className="bgYellowimg"
            />
            <div className="textOverlay f24 primary">SLF MAHILA FAMILY</div>
            <div className="flex flex-space-evenly">
              <img src="./images/toppng-2.png" alt="" className="topPng" />
            </div>
          </div>
        </div>
        <div className="flex flex-center mt-4">
            <div style={{textAlign:'center'}}>
            <div className="white f18 fw-600">Join the SFL Mahila Jewellers Family</div>
<div className="flex flex-space-evenly">
<div>
<div className="white f14 mt-1 qe4ad flex flex-space-evenly">
            <div className="text-align-center">We invite you to be a part of the SFL Mahila Jewellers family—a community that celebrates your
 individuality, embraces your aspirations, and empowers you to shine in every facet of your life.
 Explore our collection, embark on a journey of financial growth with our saving schemes, and let
 us be your trusted companions in creating memories that last a lifetime.</div>
            </div>
            <div className="primary f14 mt-1 qe4ad flex flex-space-evenly fw-600">
            Thank you for choosing SFL Mahila Jewellers, where every piece tells a story, and every saving
paves the way for a brighter future.

            </div>
</div>
</div>
            <img src="./images/aboutPageWomen.svg" className="mt-4 aboutPageWomen" alt="" />
            </div>

        </div>
        <div className="flex flex-space-evenly primary mt-2">
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
  );
};

export default about;
