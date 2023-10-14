import { Category } from "@/domain/entities/category";
import { CategoryRequest, CategoryService } from "@/domain/use-cases/category";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  create(request: CategoryRequest): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<Category[]> {
    const response = await http.get<Category[]>(
      "/RESERVATIONS-SERVICE/categories"
    );
    return response.data ?? [];
  }
}
