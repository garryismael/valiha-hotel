import { Category } from "./category";

export interface Room {
  id: string;
  title: string;
  price: number;
  available: boolean;
  image: string;
  category: Category;
}
