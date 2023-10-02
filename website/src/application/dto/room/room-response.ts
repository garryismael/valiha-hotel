import { CategoryResponseDto } from "../category/category-response";

export class RoomResponseDto {
  constructor(
    private id: string,
    private title: string,
    private price: number,
    private image: string,
    private category: CategoryResponseDto
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

  getCategory(): CategoryResponseDto {
    return this.category;
  }
}
