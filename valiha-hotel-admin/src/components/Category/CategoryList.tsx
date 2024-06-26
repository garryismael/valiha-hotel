"use client";

import { categoryBreadcrumbs } from "@/constants/category";
import { Category } from "@/domain/entities/category";
import { useCategoryList } from "@/hooks/useCategory";
import { Input } from "@nextui-org/react";
import Breadcrumbs from "../BreadCrumbs";
import CategoryCard from "./CategoryCard";
import AddCategory from "./add-category";

type Props = {
  categories: Category[];
};

const CategoryList = ({ categories: data }: Props) => {
  const categories = useCategoryList(data);

  return (
    <>
      <Breadcrumbs breadcrumbs={categoryBreadcrumbs} />
      <h3 className="title">Categories des chambres</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            isClearable
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Rechercher des categories de chambres"
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddCategory />
        </div>
      </div>
      <div className="max-w-[100rem] mx-auto w-full flex items-center justify-between content-between gap-8 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
