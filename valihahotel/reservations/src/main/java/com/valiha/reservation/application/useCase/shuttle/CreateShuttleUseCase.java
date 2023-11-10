package com.valiha.reservation.application.useCase.shuttle;

import com.valiha.reservation.application.dto.shuttle.ShuttleBaseRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;

public interface CreateShuttleUseCase {
  ShuttleResponseDto execute(String reservationId, ShuttleBaseRequestDto dto);
}
