package com.valiha.reservation.application.useCase.breakfast;

import com.valiha.reservation.application.dto.breakfast.BreakfastRequestDto;
import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;

public interface EditBreakfastUseCase {
  BreakfastResponseDto execute(String id, BreakfastRequestDto dto);
}