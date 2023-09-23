package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.useCase.reservation.EditReservationUseCase;

public class EditReservationInteractor implements EditReservationUseCase {

  @Override
  public ReservationResponseDto execute(
    String id,
    ReservationRequestDto requestDto
  ) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'execute'");
  }
}
