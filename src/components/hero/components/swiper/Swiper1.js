import React, { useEffect } from "react";
import "./Swiper1.css";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import img1 from "./../../../../assets/1.jpg";
import img2 from "./../../../../assets/2.jpg";
import img3 from "./../../../../assets/3.jpg";

const swiper1s = [
  {
    id:1,
    image:img1,
    title: "swiper1",
    description:"description de swiper"
  },
  {
    id:2,
    image:img2,
    title: "swiper2",
    description:"description de swiper"
  },
  {
    id:3,
    image:img3,
    title: "swiper3",
    description:"description de swiper"
  }
]

export default function Swiper1() {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper(".container1", {
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".pagination1 ",
      },
      navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
      },
      autoplay: {
        delay: 5000,
      },
    });
  });
  return (
    <div>
      <div className="swiper-container container1">
        <div className="swiper-wrapper wrapper1">
          {
            swiper1s.map(swiper1 =>(
              <div className="swiper-slide slide1" key={swiper1.id}>
                <img className="img_slide1" src={swiper1.image} />
                <div className="slide_text">
                  <h2>{swiper1.title}</h2>
                  <p>{swiper1.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="swiper-pagination pagination1"></div>
        <div className="swiper-button-prev prev1"></div>
        <div className="swiper-button-next next1"></div>
      </div>
    </div>
  );
}
