import { inject, injectable } from "tsyringe";
import { Category } from "../entities/category";

export interface CategoryService {
  findAll(): Promise<Category[]>;
}

export interface GetCategoriesUseCase {
  execute(): Promise<Category[]>;
}

@injectable()
export class GetCategoriesInteractor implements GetCategoriesUseCase {
  constructor(
    @inject("CategoryService") private blogService: CategoryService
  ) {}

  execute(): Promise<Category[]> {
    return this.blogService.findAll();
  }
}
