"use client";

import { Category } from "@/domain/entities/category";
import CategoryCard from "./CategoryCard";

type Props = {
  categories: Category[];
};

const CategoryList = ({ categories }: Props) => {
  return (
    <>
      <div className="title">Liste des Chambres Et Appartements</div>
      <div className="flex items-center justify-between content-between gap-8 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
