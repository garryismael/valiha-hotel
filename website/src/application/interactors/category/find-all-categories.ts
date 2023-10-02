import { CategoryResponseDto } from "@/application/dto/category/category-response";
import type { CategoryService } from "@/application/service/category";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import { injectable } from "tsyringe";

@injectable()
export class FindAllCategoriesInterceptor implements FindAllCategoriesUseCase {
  constructor(private categoryService: CategoryService) {}

  async execute(): Promise<CategoryResponseDto[]> {
    const categories = await this.categoryService.findAll();
    console.log(categories.length);
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
