import { CategoryService } from "@/application/service/category";
import CATEGORY_VALUES from "@/core/entities/constants/entity-data";
import { Category } from "@/core/entities/models/Category";
import { autoInjectable, inject } from "tsyringe";
import { HttpClient } from "../config/axios";

@autoInjectable()
export class CategoryServiceImpl implements CategoryService {
  constructor(
    @inject("HttpClient") private httpClient: HttpClient
  ){}

  async findAll(): Promise<Category[]> {
    return CATEGORY_VALUES;
  }
}
