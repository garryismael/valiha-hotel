import { Category } from "@/domain/entities/category";
import CategoryCard from "../CategoryCard";
import {useTranslation} from "next-i18next";
export const CategorySection = ({ categories }: { categories: Category[] }) => {
  const {t} = useTranslation();
  return (
    <section className="container mx-auto">
      <div className="title">{t("home.category.title")}</div>
      <div className="flex items-center justify-between content-between gap-8 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
