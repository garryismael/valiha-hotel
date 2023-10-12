import { ICategory } from "@/core/interfaces/models/Category";

export interface Category {
  id: string;
  title: string;
  type: string;
  pax: number;
  bigBed: number;
  smallBed: number;
  image: string;
}
