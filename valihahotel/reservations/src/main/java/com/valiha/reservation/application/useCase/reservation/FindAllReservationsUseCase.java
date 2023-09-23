package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import java.util.List;

public interface FindAllReservationsUseCase {
  List<ReservationResponseDto> execute();
}
