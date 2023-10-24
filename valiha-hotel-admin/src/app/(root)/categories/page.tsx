import CategoryList from "@/components/Category/CategoryList";
import {
  GetCategoriesInteractor,
  GetCategoriesUseCase,
} from "@/domain/use-cases/category";
import { useAppDispatch } from "@/hooks/useStore";
import container from "@/infrastructures/config/container.config";
import { setCategories } from "@/lib/store/slices/category-slice";

const Page = async () => {
  const getCategories = container.resolve<GetCategoriesUseCase>(
    GetCategoriesInteractor
  );
  const categories = await getCategories.execute();
  const dispatch = useAppDispatch();
  dispatch(setCategories(categories));
  
  return (
    <section className="my-14 max-w-[96rem] mx-auto w-full flex flex-col gap-4">
      <CategoryList />
    </section>
  );
};

export default Page;
