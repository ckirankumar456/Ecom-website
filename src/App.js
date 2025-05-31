import "../src/EcomWeb.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import HeaderCarousel from "./Components/HeaderCarousel";
import React from "react";
import ProductDisplay from "./Components/ProductDisplay";
import PriceDisplay from "./Components/PriceDisplay";
import FooterFrame from "./Components/FooterFrame";
function App() {
  return (
    <>
      <NavBar />
      <Header />
      <HeaderCarousel />
      <ProductDisplay />
      <PriceDisplay />
      <FooterFrame />
    </>
  );
}

export default App;
