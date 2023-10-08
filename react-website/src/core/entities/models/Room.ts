import { IRoom } from "@/core/interfaces/models/Room";
import { Category } from "./Category";
import { ICategory } from "@/core/interfaces/models/Category";

export class Room implements IRoom {
  constructor(
    private id: string,
    private title: string,
    private price: number,
    private image: string,
    private category: Category
  ) {}

  getId(): string {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getPrice(): number {
    return this.price;
  }

  getImage(): string {
    return this.image;
  }

  getCategory(): ICategory {
    return this.category;
  }
}
