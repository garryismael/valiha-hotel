package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;

public interface CreateReservationUseCase {
  ReservationResponseDto execute(ReservationRequestDto requestDto);
}
