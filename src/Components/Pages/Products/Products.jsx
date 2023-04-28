import React from 'react'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
import "../../assets/css/pages/products.css"
import HPAY from '../../partials/aside/HPAY/HPAY'

import ServiceBasketIcon from "../../assets/icons/basket-service.svg"
import StakingServiceIcon from "../../assets/icons/government-iconsvg.svg"
import BugDroidIcon from "../../assets/icons/BugDroid.svg"
import VerifiedIcon from "../../assets/icons/verified-icon.svg"
import MicIcon from "../../assets/icons/microphone-icon.svg"
import Reload from "../../assets/icons/reload.svg"
import Discover from "../../assets/icons/Discovery.svg"
import Users from "../../assets/icons/3 User.svg"


import Earth from "../../assets/images/earth.png"
function Products() {
    const ButtonList = [
        {
            text: "List of Services",
            marginTop: 20,
            icon: ServiceBasketIcon

        },
        {
            text: "Staking Service"
            , marginTop: 20,
            icon: StakingServiceIcon
        },
        {
            text: "Market Making"
            , marginTop: 20,
            icon: BugDroidIcon,
            goldArrow: true
        },
        {
            text: "Audit & KYC",
            marginTop: 20,
            icon: VerifiedIcon
        },
        {
            text: "HedgeTalk",
            marginTop: 20,
            icon: MicIcon
        },
    ]
    return (
        <>
            <div className="product-container">

                <Navbar />

                <main className="product-main contain">
                    <div className="mt-40">
                    <HPAY width={318} height={426} MainTextp1={"HPAY"} ButtonList={ButtonList} MainTextp2={"Services"} />
                    </div>
                    <div >
                        <div className="component-header-text sp-pr-h">Products</div>
                        <div className="component-content sp-pr">HedgePay provides more
                            services for projects than
                            we have room to list.
                            Don’t see what you want?
                            Contact us directly</div>
                    </div>
                    <div className="img-container">
                        <img src={Earth} alt="" />
                        <div className="img-parts p-1">
                            <img src={Discover} alt="" />
                            <div className='part-info'>
                            <div className="part-count">1000+</div>
                            <span>Services</span>
                            </div>
                        </div>
                        <div className="img-parts p-2">
                            <img src={Users} alt="" />
                            <div className='part-info'>
                            <div className="part-count">800+</div>
                            <span>Partners</span>
                            </div>
                        </div>
                        <div className="img-parts p-3">
                            <img src={Reload} alt="" />
                            <div className='part-info'>
                            <div className="part-count">5000+</div>
                            <span>Holders</span>
                            </div>
                        </div>


                    </div>
                </main>
                <Footer />


            </div>
        </>
    )
}

export default Products