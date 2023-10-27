package com.valiha.reservation.application.useCase.category;

import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import java.util.List;

public interface CategoryFindAllUseCase {
  List<CategoryResponseDto> execute();
}
