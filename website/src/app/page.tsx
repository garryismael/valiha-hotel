import { FindAllCategoriesInterceptor } from "@/application/interactors/category/find-all-categories";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import CategorySection from "@/components/Category/CategorySection";
import { HeroSection } from "@/components/HeroSection";
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
    </>
  );
}
