import { ICategory } from "../models/Category";

export interface CategoryFactory {
  create(
    id: string,
    title: string,
    type: string,
    adult: number,
    kid: number,
    bigBed: number,
    smallBed: number,
    image: string
  ): ICategory;
}
