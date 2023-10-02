import { CategoryService } from "@/application/service/category";
import { Category } from "@/core/entities/models/Category";

export class CategoryServiceImpl implements CategoryService {
  findAll(): Category[] {
    throw new Error("Method not implemented.");
  }
}
