"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";
import GalleryHotel from "../GalleryHotel";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { galleries } from "@/core/entities/constants/gallery";
import styles from "./index.module.css";
import GalleryThumb from "../GalleryThumb";

function GallerySection() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section className="container mx-auto">
      <h1 className="title">Gallery Photos</h1>
      <div>
        <Swiper
          loop={true}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={true}
          slidesPerView={2}
          pagination={{ clickable: true }}
          speed={1000}
          spaceBetween={24}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="gallery-swiper"
        >
          {galleries.map((image) => (
            <SwiperSlide key={image}>
              <GalleryHotel image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <GalleryThumb setThumbsSwiper={setThumbsSwiper} />
      </div>
    </section>
  );
}

export default GallerySection;
