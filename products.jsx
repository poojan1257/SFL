import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const products = () => {
  const navigate = useNavigate();
  const jewelryData = [
    {
      id: 1,
      name: "Diamond Necklace",
      category: "Necklace",
      variety: "Diamond",
      price: 1500.0,
      flag: true,
      img: './images/ring1.png'
    },
    {
      id: 2,
      name: "Gold Earrings",
      category: "Earrings",
      variety: "Gold",
      price: 800.0,
      flag: false,
      img: './images/ring2.png'
    },
    {
      id: 3,
      name: "Sapphire Ring",
      category: "Ring",
      variety: "Sapphire",
      price: 1200.0,
      flag: true,
      img: './images/ring3.png'
    },
    
    // Add more items as needed
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleVarietyChange = (variety) => {
    setSelectedVariety(variety);
  };
  
  const filteredJewelryData = jewelryData.filter((jData) => {
    return (
      (!selectedCategory || jData.category === selectedCategory) &&
      (!selectedVariety || jData.variety === selectedVariety)
    );
  });
  

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
  <div className="textOverlay f24 primary">Our Products</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>
      
        </div>
      

        <div className="flex g4 mt-2 pd-4">
          <div className="productCategoryBox bg-secondary pd-2">
            <div>
              <div className="primary fw-600 f14">Category</div>
              {jewelryData.map((jData) => (        
                <div className="mt-1" key={jData.id}>
                <div className="flex f12 white g1 align-item-center">
                <input
              type="radio"
              className="variety-radio"
              name="category"
              id={`category-${jData.category}`}
              checked={selectedCategory === jData.category}
              onChange={() => handleCategoryChange(jData.category)}
            />
                  <div  onClick={() => handleCategoryChange(jData.category)} className="c-pointer xcqwueg">{jData.category}</div>
                </div>
              </div>
              ))}
              
            </div>
            <hr className="mt-2" />
            <div>
              <div className="primary fw-600 f14 mt-2">Rings Variety</div>
              {jewelryData.map((jData) => (        
                <div className="mt-1" key={jData.id}>
                <div className="flex f12 white g1 align-item-center">
                <input
              type="radio"
              className="variety-radio"
              name="variety"
              id={`variety-${jData.variety}`}
              checked={selectedVariety === jData.variety}
              onChange={() => handleVarietyChange(jData.variety)}
            />
                  <div onClick ={() => handleVarietyChange(jData.variety)} className="c-pointer xcqwueg">{jData.variety}</div>
                </div>
              </div>
              ))}
            </div>
            <hr className="mt-2" />
            <div>
              <div className="primary fw-600  f14 mt-2">Price Range</div>
              
                <div className="mt-1" >
                <div className="flex f12 white g1 align-item-center">
                  <input type="radio" name="" d=""  className="variety-radio" />
                  <div className="c-pointer xcqwueg">1000-10000</div>
                </div>
              </div>
              <div className="mt-1" >
                <div className="flex f12 white g1 align-item-center">
                  <input type="radio" name="" id=""  className="variety-radio" />
                  <div className="c-pointer xcqwueg">10000-20000</div>
                </div>
              </div>
              <div className="mt-1" >
                <div className="flex f12 white g1 align-item-center">
                  <input type="radio" name="" id=""  className="variety-radio" />
                  <div className="c-pointer xcqwueg">20000-30000</div>
                </div>
              </div>
           
            </div>
          </div>
          <div>
            <div className="white f18">{selectedVariety ? (
              <div>{selectedVariety}</div>
            ):(<div>All Products</div>)}</div>
            <div className="primary f10">More than {filteredJewelryData.length} Products</div>
            <div className="productShowBox flex-wrap g2 flex  mt-2">
            {filteredJewelryData.map((jData) => (
              <div className="productCard bg-secondary" key={jData.id}>
                <div className="imageLayout">
                  <img src={jData.img} className="prodcutImage" alt="" />
                  <div className="overlay">
                  <img src="./images/whishListLikeOutline.svg" className="hrqlk" alt="" />
                </div>
                </div>
                <div className="pd-2">
                  <div className="white fw-600 f14">{jData.name}</div>
                  <div className="white mt-1 f10">
                    Shimmering circles of eternity, each gleam a story untold
                  </div>
                  <div className="fw-600 white mt-2 f16">₹{jData.price}</div>
                  <div className="flex flex-space-evenly bg-primary pd-1 mt-2 border-radius-05 white fw-600" onClick={() => navigate("/productScreenDetailed ")}>
                    Book Now 
                  </div>
                </div>
              </div>
            ))}
            </div>
            <div className="flex flex-space-evenly">
            <div className="white mt-2 paginationOuterBox flex flex-space-evenly">
              <div className="flex g1">
                <div className="f10 primary">1</div>
                <div className="f10 ">2</div>
                <div className="f10">3</div>
                <div className="f10">4</div>
                <div className="f10">...</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default products