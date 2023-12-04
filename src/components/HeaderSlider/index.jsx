import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper/core";
import image1 from "../../assets/Slider00.webp";
import image2 from "../../assets/Slider01.jpg";
import image3 from "../../assets/Slider02.jpeg";
import image4 from "../../assets/Slider03.webp";
import "./HeaderSlider.scss";
import RequestButtonModal from "../Buttons/Request-button-modal";

// Instala los módulos necesarios de Swiper
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const swiperOptions = {
    modules: [EffectFade],
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 7200,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const subInfo =
    "Cambiar divisas fácil y rápido, online o en una de nuestras sucursales.";

  const IMAGES = {
    image_1: image1,
    image_2: image2,
    image_3: image3,
    image_4: image4,
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        loop={true}
        modules={[Autoplay, Navigation, EffectFade]}
        onSlideChange={handleSlideChange}
        className="swiper"
      >
        <SwiperSlide style={{ backgroundImage: `url(${IMAGES.image_1})` }}>
          <img src={image1} />
          <div className="grid-container-swipper">
            <div className="column-1-swipper">
              <p>{subInfo}</p>
              <div className="barra_br"></div>
              <div className="constainer_solicitar_tasa_swipper">
                <RequestButtonModal name="Solicitar Tasa" position={"left"} />
              </div>
            </div>
            <div className="column-2-swipper">
              <div className="container-sib-swiper">
                {/* <img src={ImaSwiper`./sello_png1.png`} alt="SIB" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${IMAGES.image_4})` }}>
          <img src={image4} />
          <div
            className={`animation-container ${
              activeIndex === 0 ? "active" : ""
            }`}
          >
            <div className="animation-show">
              <h3>Transferencias</h3>
              <RequestButtonModal name="Solicitar Tasa" position={"center"} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${IMAGES.image_3})` }}>
          <img src={image3} />
          <div
            className={`animation-container ${
              activeIndex === 1 ? "active" : ""
            }`}
          >
            <div className="animation-show">
              <h3>Cambio de Divisas</h3>
              <RequestButtonModal name="Solicitar Tasa" position={"center"} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url(${IMAGES.image_2})` }}>
          <img src={image2} />
          <div
            className={`animation-container ${
              activeIndex === 2 ? "active" : ""
            }`}
          >
            <div className="animation-show">
              <h3>Avances de efectivo con tarjeta</h3>
              <RequestButtonModal name="Solicitar Tasa" position={"center"} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
};

export default HeaderSlider;
