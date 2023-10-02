import { CategoryResponseDto } from "@/application/dto/category/category-response";
import { CategoryService } from "@/application/service/category";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";

export class FindAllCategoriesInterceptor implements FindAllCategoriesUseCase {
  constructor(private categoryService: CategoryService) {}

  execute(): CategoryResponseDto[] {
    const categories = this.categoryService.findAll();
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
