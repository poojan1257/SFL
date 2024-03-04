import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const billingDetails = () => {
    const navigate = useNavigate();
    const [orderConfirm, setorderConfirm] = useState(false);
    const  handleOrderPlaceClick =()=>{
        setorderConfirm(true);
    }
    const hancdleCloseModal = () => {
        setorderConfirm(false);
    }
  return (
    <div className='f12 white'>
    
   <div className="productDetailsMianBox">
   <div className="" style={{ marginTop: "12vw" }}>
       <div className="flex flex-space-evenly g1">
           <div className="ujsljq">
           <div className="f18"><span>Billing</span>{" "}<span className="primary">Details</span></div>
           <div className='mt-2'>
               <div className='primary f12'>Full Name</div>
               <input type="text" name="" className='billingTextBox bg-secondary mt-1' placeholder='Enter your full name here' id="" />
           </div>
           <div className='mt-3'>
               <div className='primary f12'>Email Address</div>
               <input type="text" name="" className='billingTextBox bg-secondary mt-1' placeholder='Enter your email address here' id="" />
           </div>
           <div className='mt-3'>
               <div className='primary f12'>Phone Number</div>
               <input type="text" name="" className='billingTextBox bg-secondary mt-1' placeholder='Enter your phone number here' id="" />
           </div>
           <hr className='mt-4' />
           <div className="f18 mt-4"><span>Shipping</span>{" "}<span className="primary">Address</span></div>
           <div className='mt-3'>
               <div className='primary f12'>Address Line</div>
               <input type="text" name="" className='billingTextBox bg-secondary mt-1' placeholder='Enter your email address here' id="" />
           </div>
           <div className='mt-3'>
               <div className='primary f12'>Town</div>
               <input type="text" name="" className='billingTextBox bg-secondary mt-1' placeholder='Enter your phone number here' id="" />
           </div>
           <div className="flex mt-3 g1">
               <div>
               <div className='primary f12'>Country</div>
               <input type="text" name="" className='billingTextBoxS bg-secondary mt-1' placeholder='Enter your country here' id="" />
               </div>
               <div>
               <div className='primary f12'>Post Code</div>
               <input type="text" name="" className='billingTextBoxS bg-secondary mt-1' placeholder='Enter your post code here' id="" />
               </div>
           </div>
           </div>
           <div className="ujslq bg-secondary ">
           <div className='f20 primary fw-600 '>Order Summary</div>
           <hr className='mt-3'/>
           <div className="flex flex-space-between  align-item-center mt-3">
       <div className='white f14 fw-600'>Zodiac Rings -Zariin</div>
       <div className='fw-600 f16 primary '>₹34,543</div>
       
       </div>
       <div className="mt-1 flex align-item-center g1">
           <div className="f12 primary fw-600">5.0</div>
           <img src="./images/stars.png" className="stars" alt="" />
           <img src="./images/stars.png" className="stars" alt="" />
           <img src="./images/stars.png" className="stars" alt="" />
           <img src="./images/stars.png" className="stars" alt="" />
           <img src="./images/stars.png" className="stars" alt="" />

         </div>
         <hr className='mt-3'/>
         <div className="flex flex-space-between  align-item-center mt-3">
       <div className='white f14'>Ring Cost</div>
       <div className='fw-600 f16'>₹10,543</div>
       
       </div>
       <div className="flex flex-space-between  align-item-center mt-1">
       <div className='white f14'>GST %</div>
       <div className='fw-600 f16'>₹1,543</div>
       
       </div>
       <div className="flex flex-space-between  align-item-center mt-1">
       <div className='white f14'>Delivery Charge</div>
       <div className='fw-600 f16'>₹1,543</div>
       
       </div>
       <div className="flex g1 align-item-center mt-1 c-pointer">
       <div className='primary f14'>Apply Coupon Code</div>
       <img src="/images/vector-Z2f.png" alt="" className="footerSubmitIcon" />
       </div>
       <hr className='mt-3'/>
       <div className="flex flex-space-between  align-item-center mt-3">
       <div className='primary f16'>Total</div>
       <div className='fw-600 primary f18'>₹1,543</div>
      
       </div>
       <hr className='mt-3'/>
       <div className='f20 primary fw-600 mt-3 '>Pay via Striper</div>
      
       <div className='mt-3'>
       <div className='flex flex-space-between'>
           <div>
               <div className='white f12'>Card Number</div>
               <input type="text" name="" className='cardDetailsTextBOx bg-secondary' placeholder='123 456 789 123' id="" />
           </div>
           <div>
               <div className='white f12'>CVV</div>
               <input type="text" name="" className='cardDetailsTextBOx bg-secondary' placeholder='123' id="" />
           </div>
       </div>
       <div className='flex flex-space-between mt-2'>
           <div>
               <div className='white f12'>Expire Month</div>
               <input type="text" name="" className='cardDetailsTextBOx bg-secondary' placeholder='MM' id="" />
           </div>
           <div>
               <div className='white f12'>Expire Year</div>
               <input type="text" name="" className='cardDetailsTextBOx bg-secondary' placeholder='YYYY' id="" />
           </div>
       </div>
       </div>
       <div className="mt-4 flex g1 align-item-center">
       <input type="checkbox" name="" id=""  className="variety-radio" />
           <div className=''><span>By clicing this you agree</span>{" "}<span className='primary c-pointer'>terms and condition</span></div>
       </div>
           </div>
       </div>
       <div className="flex flex-space-evenly mt-3">
           <div className='placeOrderBtn bg-primary pd-2 fw-600 f14 ucklaue text-align-center c-pointer' onClick={handleOrderPlaceClick}>Place Order</div>
       </div>
   </div>
   </div>
       {orderConfirm && (
            <div className='f12 white orderConfirmLayer'>
            <div className="flex flex-space-evenly">
                <div className="confirmOrderOuterBox">
                <div className="confirmImageLayout">
                      <img src="./images/coinSpread.png" className="imageConifrm" alt="" />
                      <div className="overlay">
                      <div className="qxyqsl">
                        <div className="flex flex-space-evenly">
                            <div>
                                <img src="./images/sflLogo.png" className='confirmLogoImg flex ' alt="" />
                                <div className='text-align-center f14 mt-1'>Hey Siddharth,</div>
                            </div>
                        </div>
                        <div className='text-align-center f20 fw-600 mt-1'>Your Order is Confirmed!</div>
                        <div className='f12 text-align-center mt-1'>We'll send you a shipping confirmation email as
    soon as your order ships.</div>
    <div className="flex flex-space-evenly">
        <div className='mt-2 checkstatusbtn bg-primary c-pointer' onClick={() => navigate("/orderConfirmScreen2")} >Check Status</div>
    </div>
                      </div>
                      <div className="overlayCheck">
                      <img src="./images/closeBtn.svg" onClick={hancdleCloseModal} className="c-pointer hrqlk" alt="" />
                    </div>
                    </div>
    
                    </div>
                </div>
            </div>
        </div>
         )}
       
    </div>
  )
}

export default billingDetails