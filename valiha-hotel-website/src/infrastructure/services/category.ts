import { Category } from "@/domain/entities/category";
import { CategoryService } from "@/domain/use-cases/category";
import http from "../config/axios";
import { injectable } from "tsyringe";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  async findAll(): Promise<Category[]> {
    const response = await http.get<Category[]>(
      "/RESERVATIONS-SERVICE/categories"
    );
    return response.data;
  }
}
