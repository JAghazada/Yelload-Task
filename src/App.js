import { useState } from "react";
import { MainContext } from "./Components/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swap from "./Components/Pages/Swap/Swap";
import Rewards from "./Components/Pages/Rewards/Rewards";
import Products from "./Components/Pages/Products/Products";
import LeaderBoard from "./Components/Pages/LeaderBoard/LeaderBoard";
import LaunchPad from "./Components/Pages/LaunchPad/LaunchPad";
import Support from "./Components/Pages/Support/Support";
import Language from "./Components/Pages/Language/Language";
import Aboutus from "./Components/Pages/AboutUs/Aboutus";

function App() {
  const [HamburgerDisplay ,setHamburgerDisplay]  = useState(false);
  const data = {
    HamburgerDisplay,setHamburgerDisplay
  }
  return (
    <MainContext.Provider value={data}>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" Component={Swap}/>
      <Route exact path="/swap" Component={Swap}/>
      <Route exact path="/rewards" Component={Rewards}/>
      <Route exact path="/products" Component={Products}/>
      <Route exact path="/leaderboard" Component={LeaderBoard}/>
      <Route exact path="/launchpad" Component={LaunchPad}/>
      <Route exact path="/support" Component={Support}/>
      <Route exact path="/language" Component={Language}/>
      <Route exact path="/aboutus" Component={Aboutus}/>

      





    </Routes>
    </BrowserRouter>
    </MainContext.Provider>


  );
}

export default App;
