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




import { Link } from 'react-router-dom';
function Navbar({bgColor}) {
   
    const {HamburgerDisplay,setHamburgerDisplay} =useContext(MainContext);
  
    const NavItems= [
       {
        path:"/",
        class:"show-sm",
        icon:HomeIcon,
        text:"Home"
       },
       {
        path:"/swap",
        class:"show-sm",
        icon:SwapIcon,
        text:"Swap"
       },
       {
        path:"/rewards",
        class:"show-sm",
        icon:RewardsIcon,
        text:"Rewards"
       },
       {
        path:"/products",
        class:"show-sm",
        icon:ProductsIcon,
        text:"Products"
       },
       {
        path:"/launchpad",
        class:"show-sm",
        icon:LaunchpadIcon,
        text:"Launchpad"
       },
       {
        path:"/leaderboard",
        class:"show-sm",
        icon:LeaderboardIcon,
        text:"Leaderboard"
       }, {
        path:"/aboutus",
        class:"show-sm",
        icon:AboutIcon,
        text:"About Us"
       },
       {
        path:"/support",
        class:"show-sm",
        icon:SuportIcon,
        text:"Support"
       },
       

    ]
    return (
        <header style={{backgroundColor:bgColor}}>
            <nav className="contain">
            <li className="certik-logo nav-item show-sm">
                        <img src={CertikLogo} alt="yelload-logo" />
                </li>
                  
                <ul id='links'  className={HamburgerDisplay ? "show-links" : ""}>
              
                <li className="logo nav-item hidden-sm">
                        <img src={YelloadLogo} alt="yelload-logo" />
                </li>
                {/* {
                    NavItems.map(item=><li className="nav-item show-sm">
                        <span  className="show-sm">
                            <img src={item.icon} alt="" />
                        </span>
                        <Link style={{textDecoration:"none",color:"#fff"}} to={item.path}>{item.text}</Link>
                    </li>)
                } */}
                    <li className="nav-item show-sm">
                        <span  className="show-sm">
                            <img src={HomeIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={'/home'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={SwapIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/swap"}>Swap</Link></li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={RewardsIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/rewards"}>Rewards</Link></li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={ProductsIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/products"}>Products</Link></li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={LaunchpadIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/launchpad"}>Launchpad</Link></li>
                    <li className="nav-item">
                        <span className="show-sm">
                            <img src={LeaderboardIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/leaderboard"}>Leaderboard</Link></li> 
                    <li className='nav-item show-sm'>
                        <span className="show-sm">
                            <img src={AboutIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/aboutus"}>About Us</Link></li>
                    <li className='nav-item show-sm'>
                        <span className="show-sm">
                            <img src={SuportIcon} alt="" />
                        </span>
                        <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/support"}>Support</Link></li>
                </ul>
                <ul id='top-menu'>
                    <li className='hidden-sm'><Link style={{textDecoration:"none",color:"#fff"}} to={"/aboutus"}>About Us</Link></li>
                    <li className='hidden-sm'>  <Link onClick={()=>setHamburgerDisplay(false)}  style={{textDecoration:"none",color:"#fff"}} to={"/support"}>Support</Link></li>
                    <li><button className="btn btn-connect-wallet">Connect Wallet</button></li>
                    <li className="language">
                        En
                    </li>
                    <li className="basket">
                        <div className="basket-sm-span">
                            1
                        </div>
                        <img src={ ShoppingCartLogo} alt="" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar