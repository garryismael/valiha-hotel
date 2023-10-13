import { CategorySection } from "@/components/CategorySection";
import ChooseValihaHotel from "@/components/ChooseValihaHotel";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import { Category } from "@/domain/entities/category";
import {
  GetCategoriesUseCase,
  GetCategoriesInteractor,
} from "@/domain/use-cases/category";
import { container } from "tsyringe";

export default function Home({ categories }: { categories: Category[] }) {
  return (
    <>
      <HeroSection />
      <CategorySection categories={categories} />
      <ServiceSection />
      <GallerySection />
      <ChooseValihaHotel />
    </>
  );
}

export async function getServerSideProps() {
  console.log("Hello, World");
  const getCategories = container.resolve<GetCategoriesUseCase>(
    GetCategoriesInteractor
  );
  const categories = await getCategories.execute();

  return { props: { categories } };
}
