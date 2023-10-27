import { Category } from "@/domain/entities/category";
import { CategoryRequest, CategoryService } from "@/domain/use-cases/category";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  async create(request: CategoryRequest): Promise<Category> {
    const data = new FormData();
    data.append("title", request.title);
    data.append("type", request.type);
    data.append("bigBed", request.bigBed.toString());
    data.append("smallBed", request.smallBed.toString());
    data.append("pax", request.pax.toString());
    data.append("image", request.image as File);

    const response = await http.post<Category>(
      "/RESERVATIONS-SERVICE/categories",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    return response.data;
  }
  async findAll(): Promise<Category[]> {
    const response = await httpClient.get<Category[]>(
      "/RESERVATIONS-SERVICE/categories"
    );
    return response.data;
  }
}
