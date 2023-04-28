import React from 'react'
import Navbar from '../../partials/Navbar'
import HPAY from '../../partials/aside/HPAY/HPAY'
import Footer from '../../partials/Footer'

// !flags
import Turkey from "../../assets/icons/turkey-flag.svg"
import Spain from "../../assets/icons/spain-flag.svg"
import SoutKorea from "../../assets/icons/south-korea-flag.svg"
import USA from "../../assets/icons/usa-flag.svg"
import Portugal from "../../assets/icons/portugal-flag.svg"
import China from "../../assets/icons/china-flag.svg"
import Poland from "../../assets/icons/poland-flag.svg"
import Germany from "../../assets/icons/germany-flag.svg"
import France from "../../assets/icons/france-flag.svg"
import India from "../../assets/icons/india-flag.svg"
import Italy from "../../assets/icons/italy-flag.svg"
import Japan from "../../assets/icons/japan-flag.svg"
import Russia from "../../assets/icons/russian-federation-flag.svg"
import Sweden from "../../assets/icons/sweden-circle.svg"
import UAE from "../../assets/icons/united-arab-emirates-flag.svg"
import Vietnam from "../../assets/icons/vietnam-flag.svg"

import LanguageImg from "../../assets/images/Language.png"

import "../../assets/css/pages/language.css"

function Language() {
    const LanguageList = [
        {
            text: "English",
            icon: USA,

        },
        {
            text: "Español",
            icon: Spain
        },
        {
            text: "Português",
            icon: Portugal
        },
        {
            text: "Swedish",
            icon: Sweden
        },
        {
            text: "हिंदी",
            icon: India
        },
        {
            text: "한국어",
            icon: SoutKorea
        },
        {
            text: "日本語",
            icon: Japan
        },
        {
            text: "Türkçe",
            icon: Turkey
        }
    ]

    const LanguageListCol2 = [
        {
            text:"中文",
            icon:China
        },
        {
            text:"中文",
            icon:UAE
        },
        {
            text:"ViệtNam",
            icon:Vietnam
        },
        {
            text:"Deutsch",
            icon:Germany
        },
        {
            text:"Русский",
            icon:Russia
        },
        {
            text:"Italiano",
            icon:Italy
        },
        {
            text:"Indonesia",
            icon:Poland
        },
        {
            text:"Français",
            icon:France
        },
    ]
    return (
        <>
            <div className="product-container">

                <Navbar />

                <main className="product-main contain language-main">

                    <div className='support-text'>
                        <h1>Hello World</h1>
                        <p>Multiple language options</p>
                    </div>
                    <div style={{marginTop:"15%"}} className="support-img-container lang-img-container">
                        <img src={LanguageImg} alt="" />
                    </div>
                    <div className="mt-40">
                        <div className="list-languages">
                            <div className="list-text">
                                Language
                                <div className="list-columns">
                                    <div className="list1">
                                        {LanguageList.map(lang=><div key={lang.text} className="lang-bg">
                                            <img src={lang.icon} alt="" />
                                            <span className={lang.text === "English" ? "gold-text":"" }>{lang.text}</span>
                                        </div>)}
                                    </div>
                                    <div className="list2">
                                    {LanguageListCol2.map(lang=><div key={lang.text} className="lang-bg">
                                            <img src={lang.icon} alt="" />
                                            <span>{lang.text}</span>
                                        </div>)}
                                    </div>
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

export default Language