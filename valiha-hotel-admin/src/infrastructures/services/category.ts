import { Category } from "@/domain/entities/category";
import { CategoryRequest, CategoryService } from "@/domain/use-cases/category";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";
import { createFormData } from "../utils";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  async create(request: CategoryRequest): Promise<Category> {
    const data = createFormData(request);

    const response = await http.post<Category>(
      "/RESERVATIONS-SERVICE/categories",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
  async findAll(): Promise<Category[]> {
    const response = await httpClient.get<Category[]>(
      "/RESERVATIONS-SERVICE/categories"
    );
    return response.data ?? [];
  }
}
