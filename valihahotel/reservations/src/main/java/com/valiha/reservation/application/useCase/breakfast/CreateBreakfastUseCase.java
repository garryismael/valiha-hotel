package com.valiha.reservation.application.useCase.breakfast;

import com.valiha.reservation.application.dto.breakfast.BreakfastBaseRequestDto;
import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;

public interface CreateBreakfastUseCase {
  BreakfastResponseDto execute(
    String reservationId,
    BreakfastBaseRequestDto dto
  );
}
