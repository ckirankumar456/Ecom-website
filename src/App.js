import "../src/EcomWeb.css";
import NavbarCom from "./Components/NavbarCom";
import HeaderCom from "./Components/HeaderCom";
import HeaderCarousel from "./Components/HeaderCarousel";
import React from "react";
import ProductDisplay from "./Components/ProductDisplay";
import PriceDisplay from "./Components/PriceDisplay";
import FooterCom from "./Components/FooterCom";
function App() {
  return (
    <>
      <NavbarCom />
      <HeaderCom />
      <HeaderCarousel />
      <ProductDisplay />
      <PriceDisplay />
      <FooterCom />
    </>
  );
}

export default App;
