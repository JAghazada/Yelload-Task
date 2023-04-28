import React, { useEffect } from 'react'
import "../assets/css/footer.css"
import CertikLogo from "../assets/icons/certik-logo.svg"
import CoinMarketLogo from "../assets/icons/coin-market-icon.svg"
import SocialsLogo from "../assets/icons/socials-icon.svg"
import SupportLogo from "../assets/icons/support-icon.png"
import SupportSmileIcon from "../assets/icons/support-smile.svg"
import { MainContext,useContext } from '../Context'
function Footer() {
    const {HamburgerDisplay ,setHamburgerDisplay} = useContext(MainContext)
   
    
    return (
        <footer>
            <section className="contain">
                <ul >
                    <li className='hidden-sm'> <img src={CertikLogo} alt="certik-logo" /></li>
                    <li className='show-sm'>
                        <div className="support-chat-container">
                                <div className="support-chat">
                                    <div className="support-triangle"></div>
                                    <div className="support-smile">
                                        <img src={SupportSmileIcon} alt="support-smile?" />
                                    </div>
                                </div>
                        </div>
                    </li>
                </ul>
                <ul className={HamburgerDisplay ? "show-footer-item-logos footer-item-logos" :"footer-item-logos"}>

                    <li className='footer-item'> <img src={CoinMarketLogo} alt="certik-logo" />
                        <span className='footer-text'>
                            CoinMarketCup
                        </span>
                    </li>
                    <li className='footer-item'> <img src={SocialsLogo} alt="socials-logo" />
                        <span className='footer-text'>
                            Socilas
                        </span>
                    </li>
                    <li className='footer-item'> <img src={SupportLogo} alt="support-logo" />
                        <span className='footer-text'>
                            Support
                        </span>
                    </li>


                </ul>
                <ul className='show-sm'>
                    <li>
                        <div className="hamburger-menu" onClick={()=>setHamburgerDisplay(!HamburgerDisplay)}>
                            <div className="hamburger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            </div>
                            <span className='burger-text'>Menu</span>
                        </div>
                    </li>
                </ul>
            </section>

        </footer>
    )
}

export default Footer