package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;

public interface EditReservationUseCase {
  ReservationResponseDto execute(String id, ReservationRequestDto requestDto);
}
