import React, { useEffect } from "react";
import "./hero.css";
import img1 from "./../../assets/1.jpg";
import img2 from "./../../assets/2.jpg";
import img3 from "./../../assets/3.jpg";
import img4 from "./../../assets/4.jpg";
import img5 from "./../../assets/5.jpg";
import img6 from "./../../assets/6.jpg";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

export default function Hero() {
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
    const swiper2 = new Swiper(".container2", {
      direction: "horizontal",
      loop: true,
    });
  });

  return (
    <div className="hero">
      <div class="swiper-container container1">
        <div class="swiper-wrapper wrapper1">
          <div class="swiper-slide slide1">
            <img className="img_slide1" src={img1} />
            <div className="slide_text">
              <h2>Hi Slide</h2>
              <p>loremasdkoasdasjdnjasnd</p>
            </div>
          </div>
          <div class="swiper-slide slide1">
            <img className="img_slide1" src={img6} />
            <div className="slide_text">
              <h2>Hi Slide</h2>
              <p>loremasdkoasdasjdnjasnd</p>
            </div>
          </div>
          <div class="swiper-slide slide1">
            <img className="img_slide1" src={img3} />
            <div className="slide_text">
              <h2>Hi Slide</h2>
              <p>loremasdkoasdasjdnjasnd</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination pagination1"></div>
        <div class="swiper-button-prev prev1"></div>
        <div class="swiper-button-next next1"></div>
      </div>

      <div class="swiper-container container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide2">
            <div className="cont_destacados">
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img4} />
                  <div className="text_slide2">
                        <h2>OLa</h2>
                        <p>loremasdkoasdasjdnjasnd</p>
                  </div>
                </div>
              </div>
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img5} />
                  <div className="text_slide2">
                        <h2>OLa</h2>
                        <p>loremasdkoasdasjdnjasnd</p>
                  </div>
                </div>
              </div>
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img6} />
                  <div className="text_slide2">
                        <h2>OLa</h2>
                        <p>loremasdkoasdasjdnjasnd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide slide2">
            <div className="cont_destacados">
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img2} />
                </div>
              </div>
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img3} />
                </div>
              </div>
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img1} />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide slide2">
            <div className="cont_destacados">
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img6} />
                </div>
              </div>
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img5} />
                </div>
              </div>
              <div className="noticia_destacada">
                <div className="overflow">
                  <img className="img_slide2" src={img4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
