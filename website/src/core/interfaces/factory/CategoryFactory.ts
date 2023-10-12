import { ICategory } from "../models/Category";

export interface CategoryFactory {
  create(
    id: string,
    title: string,
    type: string,
    pax: number,
    bigBed: number,
    smallBed: number,
    image: string
  ): ICategory;
}
