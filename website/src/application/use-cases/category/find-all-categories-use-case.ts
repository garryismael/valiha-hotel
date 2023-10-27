import { CategoryResponseDto } from "@/application/dto/category/category-response";

export interface FindAllCategoriesUseCase {
  execute(): Promise<Array<CategoryResponseDto>>;
}
