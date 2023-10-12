export interface ICategory {
  getId(): string;
  getTitle(): string;
  getType(): string;
  getPax(): number;
  getBigBed(): number;
  getSmallBed(): number;
  getImage(): string;
}
