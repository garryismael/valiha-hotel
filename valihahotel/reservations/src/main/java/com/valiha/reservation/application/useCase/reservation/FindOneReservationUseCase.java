package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;

public interface FindOneReservationUseCase {
  ReservationResponseDto execute(String id);
}
