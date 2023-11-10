package com.valiha.reservation.application.useCase.shuttle;

import com.valiha.reservation.application.dto.shuttle.ShuttleRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;

public interface EditShuttleUseCase {
  ShuttleResponseDto execute(String id, ShuttleRequestDto dto);
}
