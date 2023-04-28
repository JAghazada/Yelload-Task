import React from 'react'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
import HPAY from '../../partials/aside/HPAY/HPAY'
import Vector from "../../assets/icons/Vector (1).svg"
import Calendar from "../../assets/icons/CalendarCheck.svg"
import NewsPapers from "../../assets/icons/ChartPieSlice.svg"
import MTeams from "../../assets/icons/MicrosoftTeamsLogo.svg"
import Whitepaper from "../../assets/icons/whitepaper.svg"

import "../../assets/css/pages/aboutus.css"

import BackgroundImg from "../../assets/images/earth-anime.png"
function Aboutus() {
    const ButtonList = [
        {
            text: " Whitepaper",
            icon: Whitepaper,
            marginTop: 20

        },
        {
            text: " Tokenomics",
            icon: NewsPapers,
            marginTop: 20
        },
        {
            text: " Roadmap",
            icon: Calendar,
            marginTop: 20,
            goldArrow: true
        },
        {
            text: " Meet the Team",
            icon: MTeams,
            marginTop: 20
        },
        {
            text: " HedgePay Branding",
            icon: Vector,
            marginTop: 20
        },
    ]
    return (
        <div style={{backgroundColor:"#000 !important"}}>
            <div style={{backgroundColor:"#000"}} className="product-container pr-black">

                <Navbar bgColor={"#000"} />

                <main style={{backgroundImage:`url(${BackgroundImg})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}} className="product-main contain language-main">

                    <div className='support-text austext'>
                        <h1>HedgePay</h1>
                        <p>HedgePay launched on February 8th 2022</p>
                    </div>
                  <div className='aushpay'>
                  <HPAY width={318} height={381} ButtonList={ButtonList}
                     MainTextp2={""}   MainTextp1={"About Us"} />
                  </div>

                </main>
                <Footer bgColor={"#000"}  />


            </div>
        </div>
    )
}

export default Aboutus