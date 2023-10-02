"use client";

import { CategoryResponseDto } from "@/application/dto/category/category-response";
import CategoryCard from "../CategoryCard";

type Props = {
  categories: Array<CategoryResponseDto>;
};

const CategoryList = ({ categories }: Props) => {
  return (
    <>
      {categories.map((category) => (
        <CategoryCard key={category.getId()} category={category} />
      ))}
    </>
  );
};

export default CategoryList;
