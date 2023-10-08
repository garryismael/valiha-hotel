import { ICategory } from "./Category";

export interface IRoom {
    getId(): string;
    getTitle(): string;
    getPrice(): number;
    getImage(): string;
    getCategory(): ICategory;
}
