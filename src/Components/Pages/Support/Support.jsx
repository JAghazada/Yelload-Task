import React, { useEffect, useState } from 'react'
import HPAY from '../../partials/aside/HPAY/HPAY'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'

import "../../assets/css/pages/support.css"

import InfoIcon from "../../assets/icons/Info-icon.svg"
import NotepadIcon from "../../assets/icons/notepad-icon.svg"
import TechnicalSupportIcon from "../../assets/icons/technical-support-icon.svg"

import City from "../../assets/icons/City.svg"
import Star from "../../assets/images/Star.png"
import CitySmall from "../../assets/images/City-small.png"

function Support() {
    const [CityImage,setCityImage] = useState(City)
    useEffect(() => {
        const updateCardImage = () => {
           setCityImage( window.innerWidth > 975 ? City : CitySmall)
        };
        updateCardImage();
        window.addEventListener('resize', updateCardImage);

        return () => {
            window.removeEventListener('resize', updateCardImage);
        };
    }, []);
    const ButtonList =[
        {
            text:"Help Center",
            goldArrow:true,
            icon:InfoIcon
            ,marginTop:15
        },
        {
            text:"Request Forms",
            goldArrow:true,
            icon:NotepadIcon
            ,marginTop:15
        },
        {
            text:"Technical Support",
            goldArrow:true,
            icon:TechnicalSupportIcon
            ,marginTop:15
        }
    ]
  return (
    <>
    <div className="product-container">

        <Navbar />

        <main className="product-main contain support-main">
          
            <div className='support-text'>
                <h1>Let's Talk</h1>
                <p>We are here to help</p>
            </div>
           <div className="support-img-container">
                    <img src={Star} alt="" />

                    <img src={CityImage} alt="" />

           </div>
            <div className="mt-40">
            <HPAY width={318} height={261} MainTextp1={"Support"} ButtonList={ButtonList} MainTextp2={""} />
            </div>
        </main>
        <Footer />


    </div>
</>
  )
}

export default Support