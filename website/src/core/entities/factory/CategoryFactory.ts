import { Category } from "@/core/entities/models/Category";
import { CategoryFactory } from "@/core/interfaces/factory/CategoryFactory";

export class CategoryFactoryImpl implements CategoryFactory {
  create(
    id: string,
    title: string,
    type: string,
    pax: number,
    bigBed: number,
    smallBed: number,
    image: string
  ): Category {
    return new Category(id, title, type, pax, bigBed, smallBed, image);
  }
}
