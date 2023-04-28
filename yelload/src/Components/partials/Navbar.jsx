import React, { useContext, useEffect } from 'react';
import "../assets/css/navbar.css";
import ShoppingCartLogo from "../assets/icons/shopping-cart-logo.svg"
import YelloadLogo from "../assets/icons/yelload-logo.svg"
import CertikLogo from "../assets/icons/certik-logo.svg"
import LanguageIcon from "../assets/icons/language-icon.svg"
import HomeIcon from "../assets/icons/home-icon.svg";
import SwapIcon from "../assets/icons/swap-icon.svg";
import RewardsIcon from "../assets/icons/rewards-icon.svg";
import ProductsIcon from "../assets/icons/products-icon.svg";
import LaunchpadIcon from "../assets/icons/launchpad-icon.svg"
import LeaderboardIcon from "../assets/icons/leaderboard-icon.svg"
import  AboutIcon from "../assets/icons/aboutus-icon.svg"
import  SuportIcon from "../assets/icons/support-icon.svg"
import { MainContext } from '../Context';





function Navbar() {
   
    const {HamburgerDisplay} =useContext(MainContext);
  
    // const NavItems= [
    //     {
    //         id:0,
    //         title:"Home",
    //         path:"/"
    //     },
    //     {
    //     id:1,
    //     title:"Swap",
    //     path:"/swap"
    // },
    // {
    //     id:2,
    //     title:"Rewards",
    //     path:"/rewards"
    // },  {
    //     id:3,
    //     title:"Products",
    //     path:"/products"
    // },  {
    //     id:4,
    //     title:"Launchpad",
    //     path:"/launchpad"
    // },  {
    //     id:5,
    //     title:"Leaderboard",
    //     path:"/leaderboard"
    // },
    // ]
    return (
        <header>
            <nav className="contain">
            <li className="certik-logo nav-item show-sm">
                        <img src={CertikLogo} alt="yelload-logo" />
                </li>
                  
                <ul id='links'  className={HamburgerDisplay ? "show-links" : ""}>
              
                <li className="logo nav-item hidden-sm">
                        <img src={YelloadLogo} alt="yelload-logo" />
                </li>
                    <li className="nav-item show-sm">
                        <span   span className="show-sm">
                            <img src={HomeIcon} alt="" />
                        </span>
                        Home
                    </li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={SwapIcon} alt="" />
                        </span>
                        Swap</li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={RewardsIcon} alt="" />
                        </span>
                        Rewards</li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={ProductsIcon} alt="" />
                        </span>
                        Products</li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={LaunchpadIcon} alt="" />
                        </span>
                        Launchpad</li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={LeaderboardIcon} alt="" />
                        </span>
                        Leaderboard</li>
                    <li className='nav-item show-sm'>
                        <span className="show-sm">
                            <img src={AboutIcon} alt="" />
                        </span>
                        AboutUs</li>
                    <li className='nav-item show-sm'>
                        <span className="show-sm">
                            <img src={SuportIcon} alt="" />
                        </span>
                        Support</li>
                </ul>
                <ul id='top-menu'>
                    <li className='hidden-sm'>About-us</li>
                    <li className='hidden-sm'>Support</li>
                    <li><button className="btn btn-connect-wallet">Connect Wallet</button></li>
                    <li className="language">
                        En
                    </li>
                    <li className="basket">
                        <img src={ ShoppingCartLogo} alt="" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar