import { useState } from "react";
import { MainContext } from "./Components/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swap from "./Components/Pages/Swap/Swap";

function App() {
  const [HamburgerDisplay ,setHamburgerDisplay]  = useState(false);
  const data = {
    HamburgerDisplay,setHamburgerDisplay
  }
  return (
    <MainContext.Provider value={data}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/swap" Component={Swap}/>
    </Routes>
    </BrowserRouter>
    </MainContext.Provider>


  );
}

export default App;
