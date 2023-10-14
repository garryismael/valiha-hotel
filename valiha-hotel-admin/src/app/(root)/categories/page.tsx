import CategoryList from "@/components/Category/CategoryList";
import {
  GetCategoriesInteractor,
  GetCategoriesUseCase,
} from "@/domain/use-cases/category";
import { container } from "tsyringe";

const Page = async () => {
  const getCategories = container.resolve<GetCategoriesUseCase>(
    GetCategoriesInteractor
  );
  const categories = await getCategories.execute();
  return (
    <section className="container mx-auto p-8">
      <CategoryList categories={categories} />
    </section>
  );
};

export default Page;
