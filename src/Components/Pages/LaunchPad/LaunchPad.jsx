import React, { useEffect, useState } from 'react'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
import "../../assets/css/pages/products.css"
import "../../assets/css/pages/launchpad.css"

import HPAY from '../../partials/aside/HPAY/HPAY'

import RocketIcon from "../../assets/icons/rocket.svg"
import CaseIcon from "../../assets/icons/case.svg"
import CalendarIcon from "../../assets/icons/calendar.svg"
import Fire from "../../assets/icons/fire.svg"

import Card1 from "../../assets/images/card-1.png"
import Card2 from "../../assets/images/card-2.png"
import Card3 from "../../assets/images/card-3.png"

import Card1_1 from "../../assets/images/card-1-1.png"
import Card2_1 from "../../assets/images/card-2-1.png"
import Card3_1 from "../../assets/images/card-3-1.png"


function LaunchPad() {
    const [cardImage1, setCardImage1] = useState(Card1);
    const [cardImage2, setCardImage2] = useState(Card1);
    const [cardImage3, setCardImage3] = useState(Card1);


    useEffect(() => {
        const updateCardImage = () => {
            setCardImage1( window.innerWidth > 975 ? Card1 : Card1_1)
            setCardImage2( window.innerWidth > 975 ? Card2 : Card3_1)
            setCardImage3( window.innerWidth > 975 ? Card3 : Card3_1)

            
        };

        updateCardImage();
        window.addEventListener('resize', updateCardImage);

        return () => {
            window.removeEventListener('resize', updateCardImage);
        };
    }, []);
    const ButtonList = [
        {
            text: "Create Presale",
            marginTop: 20,
            icon: RocketIcon,
            goldArrow: true


        },
        {
            text: "Presale List"
            , marginTop: 20,
            icon: CalendarIcon
        },
        {
            text: "Liquidity Locker"
            , marginTop: 20,
            icon: CaseIcon,
        },
    ]
    return (
        <>
            <div className="product-container">

                <Navbar />

                <main className="product-main contain">
                    <div className="mt-40">
                        <HPAY width={318} height={261} MainTextp1={"HPAD"} ButtonList={ButtonList} MainTextp2={"Launchpad"} />
                    </div>
                    <div >
                        <div className="component-header-text sp-pr-h">H-Pad</div>
                        <div className="component-content sp-pr">Welcome to the multichain launchpad with over 7 different ways to launch your projecty</div>
                    </div>
                    <div className="card-container">
                        <div className="c1">
                            <img src={cardImage1} alt="" />
                            <div className="c1-content">
                                <div className="content-info">
                                    <img src={RocketIcon} alt="" />
                                    <span>LIQUIDITY RAISE</span>
                                </div>
                                <div className="content-buttons">
                                    <div className="fire-bg"><img src={Fire} alt="" /></div>
                                    <div className="create-btn">Create</div>
                                </div>
                            </div>
                        </div>
                        <div className="c2">
                            <img src={cardImage2} alt="" />
                            <div className="c2-content">
                                <div className="content-info">
                                    <img src={RocketIcon} alt="" />
                                    <span>Fair Launch</span>
                                </div>
                                <div className="content-buttons">
                                    <div className="fire-bg"><img src={Fire} alt="" /></div>
                                    <div className="create-btn">Create</div>
                                </div>
                            </div>
                        </div>
                        <div className="c3">
                            <img src={cardImage3} alt="" />
                            <div className="c3-content">
                                <div className="content-info">
                                    <img src={RocketIcon} alt="" />
                                    <span>Classic Presale</span>
                                </div>
                                <div className="content-buttons">
                                    <div className="fire-bg"><img src={Fire} alt="" /></div>
                                    <div className="create-btn">Create</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
                <Footer />


            </div>
        </>
    )
}

export default LaunchPad