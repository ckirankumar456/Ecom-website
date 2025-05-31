import "../src/EcomWeb.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import HeaderCarousel from "./Components/HeaderCarousel";

import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductDisplay from "./Components/ProductDisplay";
import PriceDisplay from "./Components/PriceDisplay";

// import FirstFrame from "./Components/FirstFrame";
// import SecondFrame from "./Components/SecondFrame";
// import ThirdFrame from "./Components/ThirdFrame";
// import FourthFrame from "./Components/FourthFrame";
// import FifthFrame from "./Components/FifthFrame";
// import SixthFrame from "./Components/SixthFrame";
// import SeventhFrame from "./Components/SeventhFrame";
import FooterFrame from "./Components/FooterFrame";
function App() {
  return (
    <>
      {/* <MyComponent /> */}
      <NavBar />
      <Header />
      <HeaderCarousel />
      <ProductDisplay />
      <PriceDisplay />
      {/* <div className="first_flex">
        <FirstFrame
          image={"/Images/projector.png"}
          title={"Projector"}
          cost={"From 7999"}
        />
        <FirstFrame
          image={"/Images/mobileSpicker.jpg"}
          title={"Mobile Speaker"}
          cost={"From 2999"}
        />
        <FirstFrame
          image={"/Images/watche.jpg"}
          title={"Mobile Speaker"}
          cost={"From 4999"}
        />
        <FirstFrame
          image={"/Images/monitors.jpg"}
          title={"Mobile Speaker"}
          cost={"From 29,999"}
        />
        <FirstFrame
          image={"/Images/printer.jpg"}
          title={"Mobile Speaker"}
          cost={"From 29,999"}
        />
      </div>
      <div className="second_flex">
        <SecondFrame
          image={"/Images/cycle.jpg"}
          title={"Mobile Speaker"}
          cost={"From 29,999"}
        />
        <SecondFrame
          image={"/Images/coffe poder.jpg"}
          title={"Mobile Speaker"}
          cost={"From 999"}
        />
        <SecondFrame
          image={"/Images/actionToy.webp"}
          title={"Mobile Speaker"}
          cost={"From 1,999"}
        />
        <SecondFrame
          image={"/Images/teapowder.webp"}
          title={"Mobile Speaker"}
          cost={"From 899"}
        />
        <SecondFrame
          image={"/Images/musicalKey Board.jpg"}
          title={"Mobile Speaker"}
          cost={"From 899"}
        />
      </div>
      <ThirdFrame />
      <div className="fourth_flex">
        <FourthFrame
          image={"/Images/helments.jpg"}
          title={"Bike Helment"}
          cost={"From 1999"}
        />
        <FourthFrame
          image={"/Images/gym essencial.webp"}
          title={"Gym Essencial"}
          cost={"From 2999"}
        />{" "}
        <FourthFrame
          image={"/Images/yoga mat.jpg"}
          title={"Yoga Mat"}
          cost={"From 999"}
        />{" "}
        <FourthFrame
          image={"/Images/trimmer.jpg"}
          title={"Trimmer"}
          cost={"From 4999"}
        />{" "}
        <FourthFrame
          image={"/Images/vaccum cleaner.jpg"}
          title={"Vaccum Cleaner"}
          cost={"From 1999"}
        />
      </div>
      <FifthFrame />
      <div className="sixth_flex">
        <SixthFrame
          image={"/Images/cameras.jpg"}
          title={"Honey"}
          cost={"From 1999"}
        />
        <SixthFrame
          image={"/Images/ChargerCable.jpg"}
          title={"Charger Cable"}
          cost={"From 999"}
        />
        <SixthFrame
          image={"/Images/phoneAdopter.webp"}
          title={"Phone Adopter"}
          cost={"From 2999"}
        />
        <SixthFrame
          image={"/Images/cameraBags.jpg"}
          title={"Camera Bags"}
          cost={"From 4999"}
        />
        <SixthFrame
          image={"/Images/bike.jpg"}
          title={"Bike"}
          cost={"From 99,999"}
        />
      </div>
      <div className="seventh_flex">
        <SeventhFrame
          image={"/Images/battery.jpg"}
          title={"Battery"}
          cost={"From 4999"}
        />
        <SeventhFrame
          image={"/Images/bikeCover.jpg"}
          title={"Bike Cover"}
          cost={"From 2999"}
        />
        <SeventhFrame
          image={"/Images/tarchLight.jpg"}
          title={"Bike Cover"}
          cost={"From 1999"}
        />
        <SeventhFrame
          image={"/Images/vehicalWasing.webp"}
          title={"Vehical Wasing"}
          cost={"From 1999"}
        />
        <SeventhFrame
          image={"/Images/riding glove.jpg"}
          title={"Riding Glove"}
          cost={"From 999"}
        />
      </div> */}
      <FooterFrame />
      {/* <ShirtsMan />
      <DressWomen />
      <SareesWomen />
      <Iphone />
      <OnePlus />
      <Shouse />
      <T_Shirts />
      <Watches />
      <Laptops />
      <Sandols />
      <Airponds />
      <MenPants /> */}
    </>
  );
}

export default App;
