"use client";

import { Category } from "@/domain/entities/category";
import { httpClient } from "@/lib/axios";
import { useState } from "react";

const CategorySection = () => {
  const [categories, setCategories] = useState<number>(0);
  const handleClick = async () => {
    const response = await httpClient.get<Category[]>(
      "/RESERVATIONS-SERVICE/categories"
    );
    setCategories(response.data.length);
  };
  
  return <div onClick={handleClick}>Data: {categories}</div>;
};

export default CategorySection;
