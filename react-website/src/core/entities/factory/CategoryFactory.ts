import { Category } from "@/core/entities/models/Category";
import { CategoryFactory } from "@/core/interfaces/factory/CategoryFactory";

export class CategoryFactoryImpl implements CategoryFactory {
  create(
    id: string,
    title: string,
    type: string,
    adult: number,
    kid: number,
    bigBed: number,
    smallBed: number,
    image: string
  ): Category {
    return new Category(id, title, type, adult, kid, bigBed, smallBed, image);
  }
}
