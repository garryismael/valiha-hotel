export class CategoryResponseDto {
  constructor(
    private id: string,
    private title: string,
    private type: string,
    private adult: number,
    private kid: number,
    private bigBed: number,
    private smallBed: number,
    private image: string
  ) {}

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getType(): string {
    return this.type;
  }

  getAdult(): number {
    return this.adult;
  }

  getKid(): number {
    return this.kid;
  }

  getBigBed(): number {
    return this.bigBed;
  }

  getSmallBed(): number {
    return this.smallBed;
  }
  
  getImage(): string {
    return this.image;
  }
}
