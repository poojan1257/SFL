import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Scroller from './scrollerTop';
import "./index.css";
import "./App.css";
import Drawer from "@mui/material/Drawer";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Home from './home';
import Header from './header'
import Footer from './footer'
import Products from './products'
import About from './about';
import HowItWorks from './howItWorks';
import ProductScreenDetailed from './productScreenDetailed'
import SavingPlan from './savingPlan';
import GoldLoans from './goldLoans';
import ReferEarn from './referEarn';
import WishList from './whishList'
import MyCart from './myCart';
import BillinDetails from './billingDetails';
import OrderConfirm from './orderConfirm';
import UserProfile from './userProfile'
import OrderConfirmScreen2 from './orderConfirmScreen2'
import TermsAndConditions from './termsAndConditions'
import EmailerScreen from './emailerScreen'
const App = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const closeDrawer=()=>{
    setState(false);
  }
  return (
    <div>
          
      <Router>
        <Scroller />
      <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
            <div className="pd-5 iqwdj">
              <div className="flex flex-space-evenly">
                <div><img src="./images/sflLogo.png" className="qdugq" alt="" /></div>
              </div>
              <div className="flex flex-space-evenly mtm-2">
            <div className="flex gm4 align-item-center ">
              <Link to="" className="secondary text-decoration-none" onClick={closeDrawer}><SearchIcon /></Link>
              <Link to="/userProfile" className="secondary text-decoration-none" onClick={closeDrawer}><PersonIcon /> </Link>
              <Link to="/wishList" className="secondary text-decoration-none" onClick={closeDrawer}><FavoriteBorderIcon /> </Link>
              <Link to="/myCart" className="secondary text-decoration-none" onClick={closeDrawer}><ShoppingCartIcon /></Link>
            </div>
            </div>
            <hr className="mtm-4" />
            <div className="mtm-4 flex flex-column fm28">
                <Link to="/" className="text-decoration-none secondary" onClick={closeDrawer}>Home</Link>
                <Link to="/about" className="mtm-4 text-decoration-none secondary" onClick={closeDrawer}>About</Link>
                <Link to="/products" className="mtm-4 text-decoration-none secondary" onClick={closeDrawer}>Products</Link>
                <Link to="/howItWorks" className="mtm-4 text-decoration-none secondary" onClick={closeDrawer}>How it Works</Link>
            </div>
          
            </div>
          </Drawer>
      <Header toggleDrawer={toggleDrawer}  />

      <Routes>  
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/products" element={<Products />} ></Route>
        <Route path="/howItWorks" element={<HowItWorks />} ></Route>
         <Route path="/productScreenDetailed" element={<ProductScreenDetailed />}></Route>
         <Route path="/savingPlan" element={<SavingPlan />}></Route>
         <Route path="/goldLoans" element={<GoldLoans />}></Route>
         <Route path="/referEarn" element={<ReferEarn />}></Route>
         <Route path="/wishList" element={<WishList />}></Route>
         <Route path="/myCart" element={<MyCart />}></Route>
         <Route path="/billingDetails" element={<BillinDetails />}></Route>
         <Route path="/orderConfirm" element={<OrderConfirm />}></Route>
         <Route path="/userProfile" element={<UserProfile />}></Route>
         <Route path="/orderConfirmScreen2" element={<OrderConfirmScreen2 />}></Route>
         <Route path="/termsAndConditions" element={<TermsAndConditions />}></Route>
         <Route path="/emailerScreen" element={<EmailerScreen />}></Route>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
};

export default App;
