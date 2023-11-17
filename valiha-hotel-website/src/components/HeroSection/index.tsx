import { images } from "@/constants/hero";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchRooms from "../SearchRooms";
import { useTranslation } from "next-i18next";

const HeroSection = () => {
  const {t} = useTranslation();
  return (
    <section className="relative h-screen z-0">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="gallery-swiper"
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              src={image.src}
              alt="room"
              fill={true}
              sizes="100%"
              className="h-full"
            />
            <div className="absolute top-1/2 left-[15%] -translate-y-1/2">
              <h1 className="text-7xl text-reddish-orange-500 w-2/3 mb-16">{image.title}</h1>
              <button className="btn btn-orange">{t("book_now")}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="absolute bottom-0 right-0 z-10 w-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <SearchRooms />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
