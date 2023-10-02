import { Category } from "@/core/entities/models/Category";

export interface CategoryService {
    findAll(): Array<Category>;
}
