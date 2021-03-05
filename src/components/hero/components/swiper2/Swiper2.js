import React, { useEffect } from "react";
import "./Swiper2.css";
import img1 from "./../../../../assets/1.jpg";
import img2 from "./../../../../assets/2.jpg";
import img3 from "./../../../../assets/3.jpg";
import img4 from "./../../../../assets/4.jpg";
import img5 from "./../../../../assets/5.jpg";
import img6 from "./../../../../assets/6.jpg";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

const swiper2s = [
  [
    {
      id: 1,
      image: img4,
      title: "swiper1",
      description: "description de swiper",
    },
    {
      id: 2,
      image: img5,
      title: "swiper2",
      description: "description de swiper",
    },
    {
      id: 3,
      image: img6,
      title: "swiper3",
      description: "description de swiper",
    },
  ],
  [
    {
      id: 4,
      image: img3,
      title: "swiper4",
      description: "description de swiper",
    },
    {
      id: 5,
      image: img2,
      title: "swiper5",
      description: "description de swiper",
    },
    {
      id: 6,
      image: img5,
      title: "swiper6",
      description: "description de swiper",
    },
  ],
  [
    {
      id: 7,
      image: img2,
      title: "swiper7",
      description: "description de swiper",
    },
    {
      id: 8,
      image: img1,
      title: "swiper8",
      description: "description de swiper",
    },
    {
      id: 9,
      image: img6,
      title: "swiper9",
      description: "description de swiper",
    },
  ],
];
export default function Swiper2() {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const swiper2 = new Swiper(".container2", {
      direction: "horizontal",
      loop: true,
    });
  });
  return (
    <div>
      <div className="swiper-container container2">
        <div className="swiper-wrapper">
          {
            swiper2s.map(sww =>(
              <div className="swiper-slide slide2">
                <div className="cont_destacados">
                  <div className="noticia_destacada">
                    <div className="overflow">
                      <img className="img_slide2" src={sww[0].image} />
                      <div className="text_slide2">
                        <h2>{sww[0].title}</h2>
                        <p>{sww[0].description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="noticia_destacada">
                    <div className="overflow">
                      <img className="img_slide2" src={sww[1].image} />
                      <div className="text_slide2">
                        <h2>{sww[1].title}</h2>
                        <p>{sww[1].description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="noticia_destacada">
                    <div className="overflow">
                      <img className="img_slide2" src={sww[2].image} />
                      <div className="text_slide2">
                        <h2>{sww[2].title}</h2>
                        <p>{sww[2].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
