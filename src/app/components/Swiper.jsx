import React, { useState } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

export default function SwiperSlider() {
  return (
    <div className="centerSlide">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            src="/slider1.jpg"
            width={1600}
            height={600}
            alt="Seguro de Carro"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/slider2.jpg"
            width={1600}
            height={600}
            alt="Realizamos bons negócios"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/slider3.jpg"
            width={1600}
            height={600}
            alt="Seguro de Casa"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
