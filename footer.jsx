import React from 'react'
import { useNavigate } from "react-router-dom";
const footer = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-secondary pd-4 white">
       <div className='footerDesktopView'>
       <div className="flex g4">
          <div className="footerC1">
            <img src="./images/sflLogo.png" className="footerLogo" alt="" />
            <div className="mt-2 line-height-2 f10">
              Explore our website to learn more about our services, vehicles,
              and how we can support your business needs.
            </div>
            <div className="flex g1 mt-1">
            <div><img src="./images/appleStore.svg" alt="" className="c-pointer jadsuceqcasg" /></div>
            <div><img src="./images/googleStore.svg" alt="" className="c-pointer jadsuceqcasg" /></div>
            </div>

          </div>
          <div className="footerC1">
            <div className="fw-600 f14">Quick Links</div>
            <div className="mt-2 f10 c-pointer hvPrimary">Privacy Policy</div>
            <div className="mt-2 f10 c-pointer hvPrimary">Terms & Conditions</div>
            <div className="mt-2 f10 c-pointer hvPrimary">Payement Terms</div>
            <div className="mt-2 f10 c-pointer hvPrimary">Cookie Policy</div>
          </div>
          <div className="footerC1">
            <div className="fw-600 f14">Address</div>
            <div className="mt-2 flex g1 ">
              <div><img src="./images/location.png" alt="" className="footerAddressicons" /></div>
             <div className="f10"> 308, The Arcade, Brigade Metropolis, Garudacharpalya, Bangalore
              506 048</div>
            </div>
            <div className="mt-2 flex g1 align-item-center">
              <div><img src="./images/call.png" alt="" className="jckaecaexv" /></div>
              <div className="f10">+91 - 9611233621</div>
            </div>
            <div className="mt-2 flex g1 align-item-center">
              <div><img src="./images/mail.png" alt="" className="hqxzsaqsx" /></div>
              <div className="f10">info@sflmahilajewellery.com</div>
            </div>
            <div className="mt-2 flex g1 align-item-center">
              <div><img src="./images/browser.png" alt="" className="iqxzqiakf" /></div>
              <div className="f10">www.sflmahilajewellery.com</div>
            </div>
          </div>
          <div className="footerC1">
            <div className="fw-600 f14">Contact Us</div>
            <input
              className="mt-2 footerTextBox bg-secondary white f10 pd-05"
              type="text"
              name=""
              id=""
              placeholder="Name*"
            />
            <input
              className="mt-1 footerTextBox bg-secondary white f10 pd-05"
              type="text"
              name=""
              id=""
              placeholder="Email*"
            />
            <input
              className="mt-1 footerTextBox bg-secondary white f10 pd-05"
              type="text"
              name=""
              id=""
              placeholder="Contact No*"
            />
            <input
              className="mt-1 footerTextBox bg-secondary white f10 pd-05"
              type="text"
              name=""
              id=""
              placeholder="Message*"
            />
            <div className="mt-2 primary flex g1 align-item-center f14 fw-600 c-pointer">
              <div>Submit</div>
              <div><img src="/images/vector-Z2f.png" alt="" className="footerSubmitIcon" /></div>
            </div>
          </div>
        </div>
        <div className="flex flex-space-evenly mt-2">
          <div className="flex align-item-center g2">
          <div className="f14">Get Social With Us :</div>
          <div className="flex align-item-center g2" style={{marginTop:'0.8vh'}}>
          <div><img src="./images/facebook.svg" alt="" className='bhstqsx'/></div>
          <div><img src="./images/instagram.svg" alt=""  className='fva2gv' /></div>
          <div><img src="./images/linkedin.svg" alt=""  className='lqxaz' /></div>
          <div><img src="./images/youtube.svg" alt=""  className='iksan' /></div>

          </div>
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex flex-space-between mt-2 f12">
          <div>Copyright@2024 All Rights reserved</div>
      
          <div className="flex g1">
            <div className="c-pointer hvPrimary" onClick={() => navigate("/termsAndConditions")}>Terms & Conditions</div>
            <div>|</div>
            <div className="c-pointer hvPrimary">Privacy</div>
            <div>|</div>
            <div className="c-pointer hvPrimary">Support</div>
          </div>
        </div>
       </div>
       <div className='footerMobileView pd-5'>
        <div className="flex gm4 align-item-center flex-space-between">
          <div>
            <div>  <img src="./images/sflLogo.png" className="ksdoqbcdew" alt="" /></div>
          </div>
          <div>
            <div className='fm18'>Explore our website to learn more about our services, vehicles, and how we can support your business needs.</div>
          </div>
        </div>
        <div className="flex flex-space-evenly">
          <div className='flex gm2 mtm-2'>
          <div><img src="./images/appleStore.svg" alt="" className="c-pointer yxqytqu1" /></div>
            <div><img src="./images/googleStore.svg" alt="" className="c-pointer yxqytqu1" /></div>
          </div>
        </div>
        <div className="flex flex-space-between mtm-3">
          <div>
            <div className='fm24 fw-600'>Quick Links</div>
            <div className='mtm-2 fm18'>
            <div >Privacy Policy</div>
            <div className='mtm-1'>Terms & Conditions</div>
            <div className='mtm-1'>Payement Terms</div>
            <div className='mtm-1'>Cookie Policy</div>
            </div>
          </div>
          <div>
            <div className='fm24 fw-600'>Get Social With Us</div>
            <div className='mtm-2 flex gm3 align-item-center'>
            <div><img src="./images/facebook.svg" alt="" className='ceweca'/></div>
          <div><img src="./images/instagram.svg" alt=""  className='lkXq' /></div>
          <div><img src="./images/linkedin.svg" alt=""  className='ZeqSx' /></div>
          <div><img src="./images/youtube.svg" alt=""  className='sdweQXd' /></div>
            </div>
          </div>
        </div>
        <div>
        <div className='mtm-3'>
            <div className='fm24 fw-600'>Address</div>
            <div className='mtm-2 fm18'>
            <div className='flex gm1' >
            <div><img src="./images/location.png" alt="" className="asadxqXaAqc" /></div>
              <div>308, The Arcade, Brigade Metropolis, Garudacharpalya, Bangalore 506 048</div>
            </div>
            <div className='mtm-1 flex gm1 align-item-center'>
            <div><img src="./images/call.png" alt="" className="asadxqXaAqc" /></div>
              <div>+91 - 9611233621</div>
            </div>
            <div className='mtm-1 flex gm1 align-item-center'>
            <div><img src="./images/mail.png" alt="" className="asadxqXaAqc" /></div>
              <div>info@sflmahilajewellery.com</div>
            </div>
            <div className='mtm-1 flex gm1 align-item-center'>
            <div><img src="./images/browser.png" alt="" className="asadxqXaAqc" /></div>
              <div>www.sflmahilajewellery.com</div>
            </div>
            </div>
          </div>
          <div className='mtm-3'>
            <div className='fm24 fw-600'>Contact Us</div>
            <div className='mtm-2 fm18'>
            <input
              className="footerMobileTextBox bg-secondary white"
              type="text"
              name=""
              id=""
              placeholder="Name*"
            />
            <input
              className="mtm-1 footerMobileTextBox bg-secondary white "
              type="text"
              name=""
              id=""
              placeholder="Email*"
            />
            <input
              className="mtm-1 footerMobileTextBox bg-secondary white"
              type="text"
              name=""
              id=""
              placeholder="Contact No*"
            />
            <input
              className="mtm-1 footerMobileTextBox bg-secondary white"
              type="text"
              name=""
              id=""
              placeholder="Message*"
            />
            </div>
            <div className='mtm-3 fm24 fw-600 primary'>Submit</div>
          </div>
        <div className="flex flex-space-evenly mtm-3 fm20">
          <div>Terms & Conditions</div>
          <div>|</div>
          <div>Privacy</div>
          <div>|</div>
          <div>Support</div>
        </div>
        <div className="flex flex-space-evenly mtm-2 fm18">
        Copyright@2024 All Rights reserved
        </div>
        </div>
       </div>
      </div>
  )
}

export default footer