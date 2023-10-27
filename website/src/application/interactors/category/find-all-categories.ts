import type { CategoryService } from "@/application/service/category";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllCategoriesInterceptor implements FindAllCategoriesUseCase {
  constructor(
    @inject("CategoryService") private categoryService: CategoryService
  ) {}

  execute() {
    return this.categoryService.findAll();
  }
}
