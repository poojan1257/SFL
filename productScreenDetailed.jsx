import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';


const productScreenDetailed = () => 
{
  const ringDataSet = [
    './images/ring1.png',
    './images/ring2.png',
    './images/ring3.png',
    './images/ring4.png',
    './images/ring5.png',
    './images/rectangle-8-bg-LK9.png'
  ];

  const navigate = useNavigate();
  const [ProductSwitch, setProductSwitch] = useState(false)

const handlePhotoSwitch =()=>{
    setProductSwitch(false);
}

const handleVideoSwitch = () =>{
  setProductSwitch(true);
}
  return (
    <div className="f12">
      <div className="productDetailsMianBox">
        <div className="" style={{ marginTop: "12vw" }}>
          <div className="flex">
            <div className={ProductSwitch ? "bg-secondary pd-1 white border-primary c-pointer" : "bg-primary pd-1 white c-pointer"} onClick={handlePhotoSwitch}>Product Details</div>
            <div className={ProductSwitch ? "bg-primary pd-1 white c-pointer" : "bg-secondary pd-1 white border-primary c-pointer"} onClick={handleVideoSwitch}>
              Product Videos
            </div>
          </div>
          {ProductSwitch ? (
            <div>
          <div className="flex g4 mt-2 white">
            <div>
              <div className="productMainImage">
              <ReactPlayer
        url="./images/Untitled video - Made with Clipchamp (3).mp4"
        width="640px"
        height="360px"
        controls
      />
               <video width="640" height="360" controls>
        <source src="./images/Untitled video - Made with Clipchamp (3).mp4" type="video/mp4" />
      </video>
              </div>

              <div className="flex g1 mt-1">
                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>
                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>

                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>

                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="f24 fw-600">Zodiac Rings - Zariin</div>
              <div className="mt-1 f14">
                Unlock the cosmic mysteries with Zariin's
              </div>
              <div className="mt-2 flex align-item-center g1">
                <div className="f12 primary fw-600">5.0</div>
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
              </div>
              <div className="mt-2 fw-600 f24">₹10,307.56</div>
              <div className="flex g1 mt-3">
                <button className="bookNowBtn fw-600 white f12 bg-primary" onClick={() => navigate("/billingDetails")}>
                  Book Now
                </button>
                <button className="addToCart bg-secondary f12 fw-600 white"  onClick={() => navigate("/myCart")}>
                  Add To Cart
                </button>
              </div>
              <div className="mt-2">
                <div className="f12 fw-600">Summary</div>
                <div className="mt-1">
                  <span className="fw-600">Brand:</span> <span>SFL</span>
                </div>
                <div className="mt-1">
                  <span className="fw-600">Weight:</span> <span>100g</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 white">
            <div className="f16 fw-600">Product Description</div>
            <div className="flex flex-space-between mt-1">
              <div className="productDescBox f14 mt-1">
                We invite you to be a part of the SFL Mahila Jewellers family—a
                community that celebrates your individuality, embraces your
                aspirations, and empowers you to shine in every facet of your
                life. Explore our collection, embark on a journey of financial
                growth with our saving schemes, and let us be your trusted
                companions in creating memories that last a lifetime.
              </div>
              <div className="productDecIconSec">
                <div className="flex g4">
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/coin.png"
                        className="productDescPng"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>22K</div>
                      <div>Gold</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/validation-1-Kuy.png"
                        className="productDescPng"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>Certified</div>
                      <div>Gold</div>
                    </div>
                  </div>
                </div>
                <div className="flex g4 mt-1 ">
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/hall-mark-1.png"
                        className="productDescPng1"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>916</div>
                      <div>Hallmarked</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/fast-delivery-1-kgo.png"
                        className="productDescPng"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>Door Step</div>
                      <div>Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          ):(
            <div>
                <div className="flex g4 mt-2 white">
            <div>
              <div className="productMainImage">
                <img
                  src="./images/rectangle-8-bg-LK9.png"
                  alt=""
                  className="imageFit"
                />
              </div>

              <div className="flex g1 mt-1">
                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>
                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>

                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>

                <div className="productThumbNail">
                  <img
                    src="./images/rectangle-8-bg-LK9.png"
                    alt=""
                    className="imageFit"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="f24 fw-600">Zodiac Rings - Zariin</div>
              <div className="mt-1 f14">
                Unlock the cosmic mysteries with Zariin's
              </div>
              <div className="mt-2 flex align-item-center g1">
                <div className="f12 primary fw-600">5.0</div>
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
              </div>
              <div className="mt-2 fw-600 f24">₹10,307.56</div>
              <div className="flex g1 mt-3">
                <button className="bookNowBtn fw-600 white f12 bg-primary" onClick={() => navigate("/billingDetails")}>
                  Book Now
                </button>
                <button className="addToCart bg-secondary f12 fw-600 white" onClick={() => navigate("/myCart")}>
                  Add To Cart
                </button>
              </div>
              <div className="mt-2">
                <div className="f12 fw-600">Summary</div>
                <div className="mt-1">
                  <span className="fw-600">Brand:</span> <span>SFL</span>
                </div>
                <div className="mt-1">
                  <span className="fw-600">Weight:</span> <span>100g</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 white">
            <div className="f16 fw-600">Product Description</div>
            <div className="flex flex-space-between mt-1">
              <div className="productDescBox f14 mt-1">
                We invite you to be a part of the SFL Mahila Jewellers family—a
                community that celebrates your individuality, embraces your
                aspirations, and empowers you to shine in every facet of your
                life. Explore our collection, embark on a journey of financial
                growth with our saving schemes, and let us be your trusted
                companions in creating memories that last a lifetime.
              </div>
              <div className="productDecIconSec">
                <div className="flex g4">
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/coin.png"
                        className="productDescPng"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>22K</div>
                      <div>Gold</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/validation-1-Kuy.png"
                        className="productDescPng"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>Certified</div>
                      <div>Gold</div>
                    </div>
                  </div>
                </div>
                <div className="flex g4 mt-1 ">
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/hall-mark-1.png"
                        className="productDescPng1"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>916</div>
                      <div>Hallmarked</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-secondary pd-1 border-radius-05">
                      <img
                        src="./images/fast-delivery-1-kgo.png"
                        className="productDescPng"
                        alt=""
                      />
                    </div>
                    <div className="text-align-center f10">
                      <div>Door Step</div>
                      <div>Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          )}
          
          <div className="mt-4 white">
            <div className="f16 fw-600">Related Products</div>
            <div className="flex flex-space-between mt-1">
              <div className="relatedProductScrollY sb flex g1">
              {ringDataSet.map((imagePath, index) => (
                  <div className="productCard1 bg-secondary" key={index}>
                    <div className="imageLayout">
                      <img
                        src={imagePath} 
                        key={index}
                        className="prodcutImage"
                        alt=""
                      />
                      <div className="overlay">
                        <img
                          src="./images/whishListLikeOutline.svg"
                          className="hrqlk"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pd-2">
                      <div className="white fw-600 f14">Gold</div>
                      <div className="white mt-1 f10 jak">
                        <div className="textWrapper">
                          Shimmering circles of eternity, each gleam a story
                          untold
                        </div>
                      </div>
                      <div className="fw-600 white mt-2 f16">₹10000</div>
                      <div className="flex flex-space-evenly bg-primary pd-1 mt-2 border-radius-05 white fw-600">
                        Book Now
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-space-evenly">
              <div className="SeeMoreProductPage primary fw-600 f14">
                See More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productScreenDetailed;
