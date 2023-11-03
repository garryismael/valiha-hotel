import { multipart } from "@/constants/axios";
import { Category } from "@/domain/entities/category";
import { CategoryRequest, CategoryService } from "@/domain/use-cases/category";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

const CATEGORY_PATH = "/RESERVATIONS-SERVICE/categories";
@injectable()
export class CategoryServiceImpl implements CategoryService {
  async create(request: CategoryRequest): Promise<Category> {
    const response = await http.post<Category>(
      CATEGORY_PATH,
      this.cast(request),
      multipart
    );
    return response.data;
  }

  async findAll(): Promise<Category[]> {
    const response = await httpClient.get<Category[]>(CATEGORY_PATH);
    return response.data;
  }

  async findOne(id: string): Promise<Category> {
    const response = await httpClient.get<Category>(`${CATEGORY_PATH}/${id}`);
    return response.data;
  }

  async edit(id: string, request: CategoryRequest): Promise<Category> {
    const response = await http.put<Category>(
      `${CATEGORY_PATH}/${id}`,
      this.cast(request),
      multipart
    );
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await http.delete<void>(`${CATEGORY_PATH}/${id}`);
  }

  private cast(request: CategoryRequest): FormData {
    const data = new FormData();
    data.append("title", request.title);
    data.append("type", request.type);
    data.append("bigBed", request.bigBed.toString());
    data.append("smallBed", request.smallBed.toString());
    data.append("pax", request.pax.toString());
    data.append("image", request.image as File);
    return data;
  }
}
