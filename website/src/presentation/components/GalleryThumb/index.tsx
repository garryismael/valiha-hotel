"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { galleries } from "@/core/entities/constants/gallery";
import { Dispatch } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

type Props = {
  setThumbsSwiper: Dispatch<any>;
};

const GalleryThumb = ({ setThumbsSwiper }: Props) => {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={5}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="h-[80%] w-full my-6"
    >
      {galleries.map((gallery) => (
        <SwiperSlide key={gallery}>
          <div className="relative h-[300px]">
            <Image
              src={gallery}
              fill={true}
              alt="hotel-gallery"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GalleryThumb;
