import { categoryTypes } from "@/constants/category";

export const getCategoryType = (key: string) => {
  return categoryTypes[key as keyof typeof categoryTypes];
};
