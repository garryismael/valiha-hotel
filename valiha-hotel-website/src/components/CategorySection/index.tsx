import { Category } from "@/domain/entities/category";
import CategoryCard from "../CategoryCard";

export const CategorySection = ({ categories }: { categories: Category[] }) => {
  return (
    <section className="container mx-auto">
      <div className="title">Nos Chambres Et Appartements</div>
      <div className="flex items-center justify-between content-between gap-8 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
