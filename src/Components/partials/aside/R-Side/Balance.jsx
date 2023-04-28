import React from 'react'
import "../../../assets/css/balance.css"
import ReverseIcon from "../../../assets/icons/reverse-icon.svg";
import NearpayIcon from "../../../assets/icons/near-iconsvg.svg";
import SmallLogo from "../../../assets/icons/small-logo.svg"
import CrossIcon from "../../../assets/icons/cross-icon.svg"
import CoinQuestionIcon from "../../../assets/icons/coin-question-icon.svg"
import GoldBottomArrow from "../../../assets/icons/gold-bottom-arrow.svg"

function Balance() {
    return (
        <div className='balance-container'>
           <div className="balance-wrapper">
           <div className="balance-amount">Your Balance :$0.92</div>
            <div className="balance-total">0.20115234 NEAR</div>
            <div className="balance-pays">
                <span> You Pay</span>
                <span>3409.2419 THPAY/NEAR</span>
            </div>

            <div className="near-btn">
                <div className='pay-amount-container'>
                    <img src={CrossIcon} alt="cross-icon" />
                    <span>0</span>
                </div>
                <div className='choose-pay-method'>
                    <img src={NearpayIcon} alt="cross-icon" />
                    <span>NEAR</span>
                    <img src={GoldBottomArrow} alt="" />

                </div>
            </div>
            <div className="reverse-operations">
                <div className="reverse-container">
                    <img src={ReverseIcon} alt="" className="reverse-img" />
                </div>
                <div className="percents">
                    Better by +76.7750%
                    <img src={CoinQuestionIcon} alt="" />
                </div>
            </div>

            <div className="thypay-btn">
                <div className='pay-amount-container'>
                    <img src={SmallLogo} alt="cross-icon" />
                    <span>0</span>
                </div>
                <div className='choose-pay-method'>
                    <img src={NearpayIcon} alt="cross-icon" />
                    <span>THPAY</span>
                    <img src={GoldBottomArrow} alt="" />

                </div>
            </div>
            <p className="privacy-policy">
                <input type="checkbox" name="" id="accept-terms" />
                <label htmlFor="accept-terms">
                I have read and agree with HedgePay Terms of Service. I have done my research to make sure I am legally able to purchase the token in my country of residence.

                </label>
            </p>
            <div className="swap-button">Swap</div>
           </div>
        </div>
    )
}

export default Balance