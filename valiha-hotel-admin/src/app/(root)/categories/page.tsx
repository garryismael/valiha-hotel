import CategorySection from "@/components/Category/CategorySection";
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
    <div className="p-2">
      <span>Category List: </span>
      {categories.length}
      <CategorySection />
    </div>
  );
};

export default Page;
