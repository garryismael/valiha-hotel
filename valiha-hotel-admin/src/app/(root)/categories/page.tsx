import CategoryList from "@/components/Category/CategoryList";
import {
  GetCategoriesInteractor,
  GetCategoriesUseCase,
} from "@/domain/use-cases/category";
import container from "@/infrastructures/config/container.config";

const Page = async () => {
  const getCategories = container.resolve<GetCategoriesUseCase>(
    GetCategoriesInteractor
  );
  const categories = await getCategories.execute();

  return (
    <section className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <CategoryList categories={categories}/>
    </section>
  );
};

export default Page;
