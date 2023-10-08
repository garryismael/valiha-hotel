import type { CategoryService } from "@/application/service/category";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllCategoriesInterceptor implements FindAllCategoriesUseCase {
  constructor(
    @inject("CategoryService") private categoryService: CategoryService
  ) {}

  async execute() {
    const categories = await this.categoryService.findAll();
    return categories.map((category) => ({
      id: category.getId(),
      title: category.getTitle(),
      type: category.getType(),
      adult: category.getAdult(),
      kid: category.getKid(),
      bigBed: category.getBigBed(),
      smallBed: category.getSmallBed(),
      image: category.getImage(),
    }));
  }
}
