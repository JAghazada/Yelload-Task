import React from 'react'
import "../../assets/css/pages/products.css"
import Navbar from '../../partials/Navbar'
import HPAY from '../../partials/aside/HPAY/HPAY'
import Footer from '../../partials/Footer'
import Aura from "../../assets/images/Aura.png"
import ArticleIcon from "../../assets/icons/Article.svg"
import UserSwitchIcon from "../../assets/icons/UserSwitch.svg"

function LeaderBoard() {
    const ButtonList =[
        {
            text:"Leaderboard",
            marginTop:20,
            icon:ArticleIcon,


        },
        {
            text:"Partnerships List",
            marginTop:20,
            icon:UserSwitchIcon,
            goldArrow:true

        }
    ]
  return (
    <>
    <div className="product-container">

        <Navbar />

        <main className="product-main contain">
            <div className="mt-40">
            <HPAY width={318} height={201} MainTextp1={"HPAY"} ButtonList={ButtonList} MainTextp2={"Leaderboard"} />
            </div>
            <div >
                <div className="component-header-text sp-pr-h">Security Center</div>
                <div className="component-content sp-pr">HedgePay provides more
                One of HedgePay’s three core 
tenants is security. Use our 
database to find projects with
known leaders and audited contracts.</div>
            </div>
            <div style={{marginTop:40}} className="img-container">
                <img src={Aura} alt="" />
            </div>
        </main>
        <Footer />


    </div>
</>
  )
}

export default LeaderBoard