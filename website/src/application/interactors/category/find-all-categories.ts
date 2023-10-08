import { CategoryResponseDto } from "@/application/dto/category/category-response";
import { FindAllCategoriesUseCase } from "@/application/use-cases/category/find-all-categories-use-case";
import { CategoryServiceImpl } from "@/infrastructure/service/category";
import { autoInjectable, injectable } from "tsyringe";

@autoInjectable()
export class FindAllCategoriesInterceptor implements FindAllCategoriesUseCase {
  constructor(private categoryService: CategoryServiceImpl) {}

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
