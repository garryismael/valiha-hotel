import { CategoryResponseDto } from '@/application/dto/category/category-response';

export interface CategoryService {
    findAll(): Promise<Array<CategoryResponseDto>>;
}
