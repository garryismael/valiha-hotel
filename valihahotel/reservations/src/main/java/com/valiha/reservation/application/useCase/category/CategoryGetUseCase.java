package com.valiha.reservation.application.useCase.category;

import com.valiha.reservation.application.dto.category.CategoryResponseDto;

public interface CategoryGetUseCase {
  CategoryResponseDto execute(String id);
}
