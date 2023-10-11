import { Dispatch } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper/types";

type Props = {
  setSwiper: Dispatch<SwiperClass>;
};

const GalleryThumb = ({ setSwiper }: Props) => {
  return (
    <Swiper
      onSwiper={setSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={5}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="h-[80%] w-full my-6"
    >
      {Array.from({ length: 22 }).map((_, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-[300px]">
            <Image
              src={`/assets/images/galleries/${i+1}.webp`}
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
