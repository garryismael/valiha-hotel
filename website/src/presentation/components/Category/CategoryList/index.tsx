import { CategoryResponseDto } from "@/application/dto/category/category-response";
import CategoryCard from "../CategoryCard";

type Props = {
  categories: Array<CategoryResponseDto>;
};

const CategoryList = ({ categories }: Props) => {
  return (
    <div className="flex items-center flex-wrap justify-between content-between gap-8">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
