import CategorySection from "@/components/CategorySection";
import ChooseValihaHotel from "@/components/ChooseValihaHotel";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <CategorySection/>
      <ServiceSection/>
      <GallerySection/>
      <ChooseValihaHotel/>
    </>
  );
}
