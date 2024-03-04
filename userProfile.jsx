import React, { useState, useEffect } from "react";

const userProfile = () => {
    const [SignInSignUp, setSignInSignUp] = useState(true)
const handleSignUpBtn = () => {
    setSignInSignUp(false);
}
  return (
    <div className="f14 white">
      <div className="productDetailsMianBox">
        <div className="" style={{ marginTop: "12vw" }}>
          <div className="flex flex-space-evenly primary">
            <div className="imageContainer">
              <img
                src="./images/bgyellowfade.png"
                alt=""
                className="bgYellowimg"
              />
              <div className="textOverlay f24 primary">USER PROFILE</div>
              <div className="flex flex-space-evenly">
                <img src="./images/toppng-2.png" alt="" className="topPng" />
              </div>
            </div>
          </div>
          <div className="flex flex-space-evenly mt-4">
            <div className="qplchw flex flex-center">
              <img
                src="./images/sflImageWomen.svg"
                alt=""
                className="heicwey"
              />
            </div>
            {SignInSignUp ? ( 
            <div className="qplchw">
              <div className="bg-secondary border-radius-1 pd-2">
                <div className="flex flex-space-evenly ">
                  <img
                    src="./images/sflLogo.png"
                    className="confirmLogoImg"
                    alt=""
                  />
                </div>
                <div className="text-align-center mt-1 primary fw-600 f18">
                  Welcome Back!
                </div>
                <div className="text-align-center mt-1 white fw-600 f12">
                  Please login with your SFL email address
                </div>
                <div className="flex flex-space-evenly mt-2">
                  <div className="SignInSignUTxtBoxLayout flex align-item-center">
                    <div>
                      <img
                        src="./images/mailIconPrimary.svg"
                        alt=""
                        className="haeus"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        className="singuPsingInTextBox"
                        id=""
                        placeholder="Enter Emaill Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-space-evenly mt-2">
                  <div className="SignInSignUTxtBoxLayout flex align-item-center">
                    <div>
                      <img
                        src="./images/passowrdIcon.svg"
                        alt=""
                        className="haeus"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        className="singuPsingInPasswordBox"
                        id=""
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <div className="">
                      <img
                        src="./images/showHideIcon.svg"
                        alt=""
                        className="qhuw c-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-end f10 mt-1 primary fw-100 iqgfqb c-pointer">
                  Forgot Password?
                </div>
                <div className="flex flex-space-evenly mt-3">
                  <div className="bg-primary pd-1 jskwqxw text-align-center fw-600 c-pointer">
                    Login
                  </div>
                </div>
                <div className="text-align-center f10 fw-200 mt-1">Or</div>
                <div className="flex flex-space-evenly mt-1">
                  <div className="flex g1">
                    <img
                      src="./images/gooleIcon.svg"
                      alt=""
                      className="ucmqhwuif c-pointer"
                    />
                    <img
                      src="./images/facebookIcon.svg"
                      alt=""
                      className="ucmqhwuif c-pointer"
                    />
                    <img
                      src="./images/instagramIcon.svg"
                      alt=""
                      className="ucmqhwudif c-pointer"
                    />
                  </div>
                </div>
                <div className="text-align-center f10 mt-2">
                  <span>Don't have an account?</span>{" "}
                  <span className="primary c-pointer" onClick={handleSignUpBtn}>Sign Up for free</span>
                </div>
              </div>
            </div>
            ):(
                <div className="qplchw"> 
                <div className="bg-secondary border-radius-1 pd-2">
                  <div className="flex flex-space-evenly ">
                    <img
                      src="./images/sflLogo.png"
                      className="confirmLogoImg"
                      alt=""
                    />
                  </div>
                  <div className="text-align-center mt-1 primary fw-600 f18">
                  Create Account
                  </div>
                  <div className="text-align-center mt-1 white fw-600 f12">
                  Enter the details and join our SFL family
                  </div>
                  <div className="flex flex-space-evenly mt-2">
                    <div className="SignInSignUTxtBoxLayout flex align-item-center">
                      <div> 
                        <img
                          src="./images/userIconPrimary.svg"
                          alt=""
                          className="haeus"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name=""
                          className="singuPsingInTextBox"
                          id=""
                          placeholder="Enter Your Full Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-space-evenly mt-2">
                    <div className="SignInSignUTxtBoxLayout flex align-item-center">
                      <div> 
                        <img
                          src="./images/mailIconPrimary.svg"
                          alt=""
                          className="haeus"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name=""
                          className="singuPsingInTextBox"
                          id=""
                          placeholder="Enter Your Email Address"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="flex flex-space-evenly mt-2">
                    <div className="SignInSignUTxtBoxLayout flex align-item-center">
                      <div> 
                        <img
                          src="./images/callIconPrimary.svg"
                          alt=""
                          className="haeus"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name=""
                          className="singuPsingInTextBox"
                          id=""
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-space-evenly mt-2">
                    <div className="SignInSignUTxtBoxLayout flex align-item-center">
                      <div>
                        <img
                          src="./images/passowrdIcon.svg"
                          alt=""
                          className="haeus"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name=""
                          className="singuPsingInPasswordBox"
                          id=""
                          placeholder="Enter Your Address"
                        />
                      </div>
                      <div className="">
                        <img
                          src="./images/showHideIcon.svg"
                          alt=""
                          className="qhuw c-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-space-evenly mt-3">
                    <div className="bg-primary pd-1 jskwqxw text-align-center fw-600 c-pointer">
                      Login
                    </div>
                  </div>
                  <div className="text-align-center f10 fw-200 mt-1">Or</div>
                  <div className="flex flex-space-evenly mt-1">
                    <div className="flex g1">
                      <img
                        src="./images/gooleIcon.svg"
                        alt=""
                        className="ucmqhwuif c-pointer"
                      />
                      <img
                        src="./images/facebookIcon.svg"
                        alt=""
                        className="ucmqhwuif c-pointer"
                      />
                      <img
                        src="./images/instagramIcon.svg"
                        alt=""
                        className="ucmqhwudif c-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
