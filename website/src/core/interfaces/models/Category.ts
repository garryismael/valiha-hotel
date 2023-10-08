export interface ICategory {
  getId(): string;
  getTitle(): string;
  getType(): string;
  getAdult(): number;
  getKid(): number;
  getBigBed(): number;
  getSmallBed(): number;
  getImage(): string;
}
