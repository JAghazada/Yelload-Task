import React from 'react';
import "../../assets/css/pages/rewards.css"
import Navbar from '../../partials/Navbar';
import Footer from '../../partials/Footer';
import HPAY from '../../partials/aside/HPAY/HPAY';
import RewardIcon from "../../assets/icons/rewards-icon.svg";
import CompoundIcon from "../../assets/icons/compound-icon.svg";
import ChartArrpwIcon from "../../assets/icons/chat-arrow-icon.svg";
import SalaryIcon from "../../assets/icons/salary.svg";
import SmallIcon from "../../assets/icons/small-logo.svg";

import Cubic from "../../assets/icons/rewards-cube-1.svg"
import Hexagon from "../../assets/icons/Hexagon.png"
import Triangle from "../../assets/icons/reward-polygon.png"


function Rewards() {
    const ButtonList = [
        {
            icon: RewardIcon,
            text: "BUSD Rewards",
            goldArrow: true,
            marginTop: 15,
        },
        {
            icon: CompoundIcon,
            text: "Auto Compound",
            goldArrow: false,
            marginTop: 15
        },
        {
            icon: ChartArrpwIcon,
            text: "Classic Staking",
            goldArrow: false,
            marginTop: 15
        },
        {
            icon: SalaryIcon,
            text: "Bounty Rewards",
            goldArrow: false,
            marginTop: 15
        }
    ]
    return (
        <>
            <Navbar />
            <img className='ab-triangle' src={Triangle} alt="" />
                <img   className='ab-cubic' src={Cubic} alt="" />
                <img   className='ab-hexagon'src={Hexagon} alt="" />
            <div className="rewards-container">
           

                <div className="contain">
                    <main className="rewards-main">
                        <HPAY MainTextp1={"HPAY"} MainTextp2={"Rewards"} ButtonList={ButtonList} width={318} height={319} />
                        <div>
                            <div className="rewards-header-text">HedgeFi <br className="show-sm" /> Rewards</div>
                            <div className="rewards-content">HedgePay offers software products and services to crypto projects and utilizes a percentage of profits to improve our HedgeFi reward pool</div>
                        </div>
                        <div className="exchange-container">
                            <div className="exchange-wrapper">
                                <div className="exchange-item">
                                    <div className="exchange-percent">
                                        82.49%
                                    </div>
                                    <div className="exchange-title">
                                        Current APY
                                    </div>
                                </div>
                                <div className="exchange-item">
                                    <div className="exchange-percent">
                                        $213
                                    </div>
                                    <div className="exchange-title">
                                        Value /day
                                    </div>
                                </div>
                                <div className="exchange-item">
                                    <div className="exchange-percent">
                                        $1,491
                                    </div>
                                    <div className="exchange-title">
                                        Value /week
                                    </div>
                                </div>
                                <div className="exchange-item">
                                    <div className="exchange-percent">
                                        $5,964
                                    </div>
                                    <div className="exchange-title">
                                        Value /month
                                    </div>
                                </div>
                            </div>

                            <div className="exchange-button">
                                    <div className="exchange-hpay-button">
                                        <img src={SmallIcon} alt="icon" />
                                        <span>HPAY</span>
                                    </div>
                                    <div className="exchange-amount">0</div>
                            </div>
                            <div className="show-sm hpay-header-text">
                            How much HedgePay you hold?
                            </div>
                        </div>
                    </main>
                </div>
                <Footer />


            </div>

        </>
    )
}

export default Rewards