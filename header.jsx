import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
const header = ({ toggleDrawer }) => {
  const navigate = useNavigate();


  return (
    <div className="white">
        <div className="headerDesktopView">
        <div className="navs">
        <div className="flex flex-space-evenly top-msg bg-primary pd-05 ">
          <div className="white f12 fw-600 marquee">
            Our Services: Gold Savings, Gold Sell And Buy, Gold Loan (Ornaments
            Loan) | Savings And Service Plan: 11 Months Installment(1 Year)
          </div> 
        </div>
        <div
          className="bg-transp-black  flex flex-space-between"
          style={{ padding: "1vw 8vw" }}
        >
          <img src="./images/sflLogo.png" className="headerLogo" alt="" />
          <div className="flex white g4 align-item-center">
            <div className="flex g3 f14">
                <Link to="/" className="text-decoration-none hvPrimary white c-pointer">Home</Link>
                <Link to="/about" className="text-decoration-none hvPrimary white c-pointer">About</Link>
                <Link to="/products" className="text-decoration-none hvPrimary white c-pointer">Products</Link>
                <Link to="/howItWorks" className="text-decoration-none hvPrimary white c-pointer">How it Works</Link>
            
            </div>
            <div className="flex g2 f14">
              <img src="./images/search.svg" alt="" className="navIcons" />
              <img src="./images/user.svg" alt="" onClick={() => navigate("/userProfile  ")}  className="navIcons" />
              <img src="./images/like.svg" a lt="" onClick={() => navigate("/wishList ")} className="navIcons" />
              <img src="./images/cart.svg" alt="" onClick={() => navigate("/myCart ")} className="navIcons" />

            </div>
          </div>
        </div>
        </div>

      </div>
      <div className="headerMobileVersion">
            {/* <div className="bg-primary pd-2 fw-600 white">
              <div className="marquee">
              Our Services: Gold Savings, Gold Sell And Buy, Gold Loan (Ornaments Loan) | Savings And Service Plan: 11 Months Installment(1 Year)
              </div>
            </div> */}
            <div className="flex flex-space-between pd-5 align-item-center">
                <div>  <img src="./images/sflLogo.png" className="headerLogo" alt="" /></div>
                <div><MenuIcon onClick={toggleDrawer("right", true)} /></div>
            </div>
      </div>
    </div>
  )
}

export default header