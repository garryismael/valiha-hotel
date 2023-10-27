"use client";

import React from "react";
import CategoryList from "../CategoryList";
import { CategoryResponseDto } from "@/application/dto/category/category-response";

export type CategoryProps = {
  categories: Array<CategoryResponseDto>;
};

function CategorySection({ categories }: CategoryProps) {
  return (
    <section className="container mx-auto">
      <h1 className="title">Nos Chambres Et Appartements</h1>
      <CategoryList categories={categories} />
    </section>
  );
}

export default CategorySection;
