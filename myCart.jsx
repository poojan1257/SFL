import React from 'react'
import { useNavigate } from "react-router-dom";
const myCart = () => {
    const navigate = useNavigate();
  return (
    <div className='f12 white'>
        <div className="productDetailsMianBox">
        <div className="" style={{ marginTop: "12vw" }}>
        <div className="flex flex-space-evenly primary">
        <div className="imageContainer">
  <img src="./images/bgyellowfade.png" alt="" className="bgYellowimg" />
  <div className="textOverlay f24 primary">MY CART</div>
  <div className="flex flex-space-evenly"><img src="./images/toppng-2.png" alt="" className="topPng" /></div>
</div>

        </div>
        <div className="f18"><span>Booked</span>{" "}<span className="primary">Products</span></div>
      <div className="flex flex-space-evenly g2 ">
        <div>
        {Array.from({ length: 5 }, (_, index) => (
        <div className='bg-secondary flex g2 border-radius-1 mt-2 kyhfgh align-item-center '>
        <div className="whishListImgMyCart">
                <img src="./images/rectangle-8-bg-LK9.png" className="imageFitWhishList" alt="" />
                <div className="overlay">
                  <img src="./images/likesWhishListPage.svg" className="hrqlk" alt="" />
                </div>
            </div>
            <div className='isjqs flex g1'>
                <div className='wahxre'>
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
                <div className=''>
                    <img src="./images/delBookedBtn.svg" className='hastkqw' alt="" />
                </div>
            </div>
        </div>
        ))}
        </div>
        <div>
        <div className='ajeoqx bg-secondary pd-2 mt-2'>
            <div className='f18 primary fw-600'>Order Summary</div>
            <hr className='mt-2'/>
            <div className="flex flex-space-between  align-item-center mt-2">
            <div className='white f14'>Sub Total</div>
            <div className='fw-600 f16 '>₹34,543</div>

            </div>
            <div className="flex flex-space-between  align-item-center mt-2">
            <div className='white f14'>Shipping</div>
            <div className='fw-600 f16 '>FREE</div>

            </div>
            <div className="flex g1 align-item-center mt-3 c-pointer">
            <div className='primary f14'>Apply Coupon Code</div>
            <img src="/images/vector-Z2f.png" alt="" className="footerSubmitIcon" />
            </div>
            <hr className='mt-3' />
            <div className="flex flex-space-between primary align-item-center mt-3">
            <div className='f14'>Total</div>
            <div className='fw-600 f16 '>₹34,543</div>
 
            </div>
        </div>
        <div className="chekOutbtn bg-primary mt-1 text-align-center pd-1 fw-600 c-pointer" onClick={() => navigate("/billingDetails")}>Checkout</div>
        </div>
      </div>
        </div>
        </div>
    </div>
  )
}

export default myCart