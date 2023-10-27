import { FindAllCategoriesInterceptor } from "@/application/interactors/category/find-all-categories";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import CategorySection from "@/presentation/components/Category/CategorySection";
import ChoiceSection from "@/presentation/components/ChoiceSection";
import GallerySection from "@/presentation/components/GallerySection";
import { HeroSection } from "@/presentation/components/HeroSection";
import ServiceSection from "@/presentation/components/ServiceSection";
import { container } from "tsyringe";

export default async function Home() {
  const findAllUseCase = container.resolve<FindAllCategoriesUseCase>(
    FindAllCategoriesInterceptor
  );
  const categories = await findAllUseCase.execute();
  return (
    <>
      <HeroSection />
      <CategorySection categories={categories} />
      <ServiceSection/>
      <GallerySection/>
      <ChoiceSection/>
    </>
  );
}
