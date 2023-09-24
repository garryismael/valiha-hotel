package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.useCase.reservation.FindAllReservationsUseCase;
import com.valiha.reservation.core.entities.models.Reservation;
import java.util.List;

public class FindAllReservationsInteractor
  implements FindAllReservationsUseCase {

  private final ReservationRepository reservationRepository;
  private final GenericPresenter<ReservationResponseDto> reservationPresenter;

  public FindAllReservationsInteractor(
    ReservationRepository reservationRepository,
    GenericPresenter<ReservationResponseDto> reservationPresenter
  ) {
    this.reservationRepository = reservationRepository;
    this.reservationPresenter = reservationPresenter;
  }

  @Override
  public List<ReservationResponseDto> execute() {
    List<Reservation> reservations = this.reservationRepository.findAll();
    return reservationPresenter.prepareSuccessView(
      ReservationResponseDto.from(reservations)
    );
  }
}
