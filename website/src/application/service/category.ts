import { Category } from "@/core/entities/models/Category";

export interface CategoryService {
    findAll(): Promise<Array<Category>>;
}
