import React from 'react'
import "../../../assets/css/aside_hpay.css"

import Arrow from "../../../assets/icons/normal-arrow.svg"

import GoldArrow from "../../../assets/icons/gold-arrow.svg"


function HPAY({ButtonList,MainTextp1,MainTextp2,width,height}) {
  return (
    <div>
        <div style={{width:width,height:height}} className='hpay-container'>
          <div>
          <div className="hpay-text">
                <div> {MainTextp1} <div className={MainTextp2 !== "" ? "r-bordered" :""}></div> {MainTextp2}</div>
            </div>
            {ButtonList.map(Button=>{
                 return(
                    <div className="btn hpay-btn" style={{marginTop:Button.marginTop}}><div>
                     <img src={Button.icon} alt="" />
                     <span className={Button.goldArrow ?  "hpay-btn-text activated-hpay-text" : "hpay-btn-text "}>
                     {Button.text}
                     </span>
                 </div>
                 <img src={Button.goldArrow ? GoldArrow : Arrow} alt="" />
             </div>
                 )
            })}
          </div>
        </div>
    </div>
  )
}

export default HPAY