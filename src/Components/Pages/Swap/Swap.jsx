import React from 'react'

import "../../assets/css/pages/swap.css"
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
import ShareIcon from "../../assets/icons/share-icon.svg"
import Chart from "../../assets/icons/chart-iconsvg.svg"
import Transak from "../../assets/icons/transak-icon.svg"
import Card from "../../assets/icons/credit-card-icon.svg"
import HPAY from '../../partials/aside/HPAY/HPAY'
import Balance from '../../partials/aside/R-Side/Balance'
function Swap() {
  const ButtonList = [
    {
      icon: Card,
      text: "Buy HedgePay",
      goldArrow: true,
      marginTop: 30,
    },
    {
      icon: ShareIcon,
      text: "Transfer Gateway",
      goldArrow: false,
      marginTop: 20
    },
    {
      icon: Chart,
      text: "View Chart",
      goldArrow: false,
      marginTop: 5
    },
    {
      icon: Transak,
      text: "Buy with Transak",
      goldArrow: false,
      marginTop: 5
    }
  ]
  return (
    <>
      <Navbar />
      <div className='swap-container'>

        <div className="contain ">
          <main className="swap-main">
            <HPAY width={318} height={307} ButtonList={ButtonList} MainTextp1={"HPAY"} MainTextp2={"Exchange"} />
            <div className='swap-text'>
              <div className="swap-header-text">
                Aggregator DEX
              </div>
              <div className="swap-content">
                HedgePay’s Aggregator DEX has the ability to track the best prices
                for the token you want on established Decentralized Exchanges. The HedgePay DEX will also provides you with the option to set limit orders,
                giving you the freedom hunt for the token you want at the price you want it
              </div>
              <div className="swap-buttons">
                <button className="buy-hedgepay-btn">Buy HedgePay</button>
                <button className="btn view-chart-btn">View Chart</button>
              </div>
            </div>
            <Balance />
          </main>
        </div>
        <Footer />

      </div>


    </>
  )
}

export default Swap