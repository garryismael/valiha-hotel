import { CategoryService } from "@/application/service/category";
import CATEGORY_VALUES from "@/core/entities/constants/entity-data";
import { Category } from "@/core/entities/models/Category";
import { injectable } from "tsyringe";
import { HttpClient } from "../config/axios";

@injectable()
export class CategoryServiceImpl implements CategoryService {
  constructor(
    private httpClient: HttpClient
  ){}

  async findAll(): Promise<Category[]> {
    return CATEGORY_VALUES;
  }
}
