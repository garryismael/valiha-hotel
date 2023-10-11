import { Category } from "./category";

export interface Room {
  id: string;
  title: string;
  price: number;
  image: string;
  category: Category;
}
