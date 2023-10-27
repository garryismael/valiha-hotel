package com.valiha.reservation.application.useCase.category;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import java.io.File;

public interface CategoryEditUseCase {
  CategoryResponseDto execute(
    String id,
    CategoryRequestDto requestDto,
    File file
  );
}
