import React from 'react'

const orderConfirm = () => {
  return (
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
    <div className='mt-2 checkstatusbtn bg-primary c-pointer'>Check Status</div>
</div>
                  </div>
                  <div className="overlay">
                  <img src="./images/closeBtn.svg" className="c-pointer hrqlk" alt="" />
                </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default orderConfirm