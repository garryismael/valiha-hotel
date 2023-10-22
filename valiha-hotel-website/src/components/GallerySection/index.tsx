import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryHotel from "./GalleryHotel";
import GalleryThumb from "./GalleryThumb";
import {useTranslation} from "next-i18next";
const GallerySection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const {t} = useTranslation();
  return (
    <section className="container mx-auto">
      <h1 className="title">{t("home.gallery")}</h1>
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
          {Array.from({length: 21}).map((_, i) => (
            <SwiperSlide key={i}>
              <GalleryHotel image={`/assets/images/galleries/${i+1}.webp`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <GalleryThumb setSwiper={setThumbsSwiper} />
      </div>
    </section>
  );
}

export default GallerySection;
