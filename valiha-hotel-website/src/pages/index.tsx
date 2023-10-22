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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getServerSideProps({ locale }: { locale: string }) {
  const getCategories = container.resolve<GetCategoriesUseCase>(
    GetCategoriesInteractor
  );
  const categories = await getCategories.execute();
  const translation = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      categories,
      ...translation,
    },
  };
}
