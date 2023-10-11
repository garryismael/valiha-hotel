import { images } from "@/constants/hero";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchRooms from "../SearchRooms";

const HeroSection = () => {
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
            <Image src={image} alt="room" fill={true} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 right-0 z-50 w-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <SearchRooms />
      </div>
    </section>
  );
};

export default HeroSection;
