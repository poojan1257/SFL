import React from "react";

const whishList = () => {
  return (
    <div className="f12 white">
      <div className="productDetailsMianBox">
        <div className="" style={{ marginTop: "12vw" }}>
        <div className="flex flex-space-evenly primary">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">WHISHLIST</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>

      
        </div>
        <div className="f18"><span>Wishlist</span>{" "}<span className="primary">Products</span></div>
        {Array.from({ length: 5 }, (_, index) => (
        <div className="bg-secondary flex g2 border-radius-1 mt-2 hayw align-item-center ">
            <div className="whishListImg">
                <img src="./images/rectangle-8-bg-LK9.png" className="imageFitWhishList" alt="" />
                <div className="overlay">
                  <img src="./images/likesWhishListPage.svg" className="hrqlk" alt="" />
                </div>
            </div>
            <div className="flex g2 pd-1">
                <div className="qudk ">
                    <div className="f16 fw-600">
                    Golden Ring
                    </div>
                    <div className="mt-1 f14">
                    Shimmering circles of eternity, 
each gleam a story untold
                    </div>
                    <div className="mt-2 f22 fw-600">
                    ₹8,278
                    </div>
                    <div className="mt-2 flex align-item-center g1">
                <div className="f12 primary fw-600">5.0</div>
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />
                <img src="./images/stars.png" className="stars" alt="" />

              </div>
                </div>
                <div className="hxka">
                    <div className="f14">Available in</div>
                    <div className="flex g2 mt-1">
                    <div className="sizeBtn white">32</div>
                    <div className="sizeBtnOutline primary">34</div>
                    <div className="sizeBtn white">38</div>

                </div>
                <div className="borderLinearRemoveBtn flex flex-space-evenly primary fw-600 c-pointer"> Remove</div>
                </div>
                
               
            </div>
        </div>
        ))}
        </div>                      
      </div>
    </div>
  );
};

export default whishList;
