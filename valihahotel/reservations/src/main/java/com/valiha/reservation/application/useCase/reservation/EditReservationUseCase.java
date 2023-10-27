package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.application.dto.reservation.CommonReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;

public interface EditReservationUseCase {
  ReservationResponseDto execute(
    String id,
    CommonReservationRequestDto requestDto
  );
}
