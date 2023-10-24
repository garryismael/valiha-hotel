"use client";

import { categoryBreadcrumbs } from "@/constants/category";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import { Input } from "@nextui-org/react";
import Breadcrumbs from "../BreadCrumbs";
import CategoryCard from "./CategoryCard";
import AddCategory from "./add-category";
import { useAppSelector } from "@/hooks/useStore";

const CategoryList = () => {
  const { categories } = useAppSelector((state) => state.category);
  return (
    <>
      <Breadcrumbs breadcrumbs={categoryBreadcrumbs} />
      <h3 className="title">Categories des chambres</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Rechercher des categories"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddCategory />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full flex items-center justify-between content-between gap-8 flex-wrap">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
