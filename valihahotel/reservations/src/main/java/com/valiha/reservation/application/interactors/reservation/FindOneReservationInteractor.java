package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.useCase.reservation.FindOneReservationUseCase;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.entities.models.Reservation;
import java.util.HashMap;
import java.util.Map;

public class FindOneReservationInteractor implements FindOneReservationUseCase {

  private final ReservationRepository reservationRepository;
  private final GenericPresenter<ReservationResponseDto> reservationPresenter;

  public FindOneReservationInteractor(
    ReservationRepository reservationRepository,
    GenericPresenter<ReservationResponseDto> reservationPresenter
  ) {
    this.reservationRepository = reservationRepository;
    this.reservationPresenter = reservationPresenter;
  }

  @Override
  public ReservationResponseDto execute(String id) {
    Reservation reservation = this.reservationRepository.findOneById(id);

    if (reservation == null) {
      Map<String, String> errors = new HashMap<String, String>();
      errors.put(
        ReservationValidator.KEY_ID,
        String.format(ReservationValidator.RESERVATION_NOT_FOUND_ERROR, id)
      );
      return this.reservationPresenter.prepareResourceNotFoundView(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          errors
        );
    }

    return this.reservationPresenter.prepareSuccessView(
        ReservationResponseDto.from(reservation)
      );
  }
}
