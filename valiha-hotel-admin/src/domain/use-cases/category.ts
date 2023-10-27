import { inject, injectable } from "tsyringe";
import { Category } from "../entities/category";

export interface CategoryRequest {
  title: string;
  type: string;
  pax: number;
  bigBed: number;
  smallBed: number;
  image: File | null;
}

export interface CategoryService {
  findAll(): Promise<Category[]>;
  create(request: CategoryRequest): Promise<Category>;
}

export interface GetCategoriesUseCase {
  execute(): Promise<Category[]>;
}

export interface CreateCategoryUseCase {
  execute(request: CategoryRequest): Promise<Category>;
}

@injectable()
export class GetCategoriesInteractor implements GetCategoriesUseCase {
  constructor(
    @inject("CategoryService") private categoryService: CategoryService
  ) {}

  execute(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}

@injectable()
export class CreateCategoryInteractor implements CreateCategoryUseCase {
  constructor(
    @inject("CategoryService") private categoryService: CategoryService
  ) {}
  execute(request: CategoryRequest): Promise<Category> {
    return this.categoryService.create(request);
  }
}
