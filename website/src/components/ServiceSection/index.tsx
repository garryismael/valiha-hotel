"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import SectionService from "../ServiceItem";
import { LuParkingCircle, LuWifi, LuCoffee } from "react-icons/lu";

export default function ServiceSection() {
  return (
    <section className="my-24">
      <h1 className="title container mx-auto">Services</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SectionService
            Icon={LuParkingCircle}
            text="Parking"
            img="/assets/images/service/img-2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionService
            Icon={LuWifi}
            text="Wifi"
            img="/assets/images/service/img-6.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionService
            Icon={LuCoffee}
            text="Breakfast"
            img="/assets/images/service/img-7.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionService
            Icon={LuParkingCircle}
            text="Parking"
            img="/assets/images/service/img-2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionService
            Icon={LuWifi}
            text="Wifi"
            img="/assets/images/service/img-6.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionService
            Icon={LuCoffee}
            text="Breakfast"
            img="/assets/images/service/img-7.webp"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
