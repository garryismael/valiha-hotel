export class RoomRequestDto {
  constructor(
    private title: string,
    private price: number,
    private categoryId: string
  ) {}

  getTitle(): string {
    return this.title;
  }

  getPrice(): number {
    return this.price;
  }

  getCategoryId(): string {
    return this.categoryId;
  }
}
