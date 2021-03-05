import React, { useEffect } from "react";
import "./hero.css";
import Swiper1 from "./components/swiper/Swiper1";
import Swiper2 from "./components/swiper2/Swiper2";

export default function Hero() {
  return (
    <div className="hero">
      <Swiper1/>
      <Swiper2/>
    </div>
  );
}
