import { CategoryResponseDto } from "@/application/dto/category/category-response";
import * as category from "@/application/service/category";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllCategoriesInterceptor implements FindAllCategoriesUseCase {
  constructor(
    @inject("CategoryServiceImpl")
    private categoryService: category.CategoryService
  ) {}

  async execute(): Promise<CategoryResponseDto[]> {
    const categories = await this.categoryService.findAll();
    return categories.map(
      (category) =>
        new CategoryResponseDto(
          category.getId(),
          category.getTitle(),
          category.getType(),
          category.getAdult(),
          category.getKid(),
          category.getBigBed(),
          category.getSmallBed(),
          category.getImage()
        )
    );
  }
}
