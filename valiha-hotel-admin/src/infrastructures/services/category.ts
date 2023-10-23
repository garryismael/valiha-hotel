import { Category } from "@/domain/entities/category";
import { CategoryRequest, CategoryService } from "@/domain/use-cases/category";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  async create(request: CategoryRequest): Promise<Category> {
    const form = new FormData();
    form.append("title", request.title);
    form.append("type", request.type);
    form.append("pax", request.pax.toString());
    form.append("bigBed", request.bigBed.toString());
    form.append("smallBed", request.smallBed.toString());
    form.append("image", request.image as File);

    const response = await http.post<Category>(
      "/RESERVATIONS-SERVICE/categories",
      form,
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
