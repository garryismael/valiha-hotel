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
  findOne(id: string): Promise<Category>;
  create(request: CategoryRequest): Promise<Category>;
  edit(id: string, request: CategoryRequest): Promise<Category>;
  delete(id: string): Promise<void>;
}

export interface GetCategoriesUseCase {
  execute(): Promise<Category[]>;
}

export interface CreateCategoryUseCase {
  execute(request: CategoryRequest): Promise<Category>;
}

export interface EditCategoryUseCase {
  execute(id: string, request: CategoryRequest): Promise<Category>;
}

export interface DeleteCategoryUseCase {
  execute(id: string): Promise<void>;
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

@injectable()
export class EditCategoryInteractor implements EditCategoryUseCase {
  constructor(
    @inject("CategoryService") private categoryService: CategoryService
  ) {}
  execute(id: string, request: CategoryRequest): Promise<Category> {
    return this.categoryService.edit(id, request);
  }
}

@injectable()
export class DeleteCategoryInteractor implements DeleteCategoryUseCase {
  constructor(
    @inject("CategoryService") private categoryService: CategoryService
  ) {}
  execute(id: string): Promise<void> {
    return this.categoryService.delete(id);
  }
}
