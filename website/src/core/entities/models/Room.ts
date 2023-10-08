import { IRoom } from "@/core/interfaces/models/Room";
import { Category } from "./Category";
import { ICategory } from "@/core/interfaces/models/Category";

export interface Room {
  id: string;
  title: string;
  price: number;
  image: string;
  category: Category;
}
