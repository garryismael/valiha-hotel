package com.valiha.reservation.application.interactors.shuttle;

import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.repository.ShuttleRepository;
import com.valiha.reservation.application.useCase.shuttle.DeleteShuttleUseCase;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteShuttleInteractor implements DeleteShuttleUseCase {

  private final ShuttleRepository shuttleRepository;
  private final GenericPresenter<ShuttleResponseDto> shuttlePresenter;
  private final ReservationFactory reservationFactory;
  private final ReservationRepository reservationRepository;

  @Override
  public void execute(String id, String reservationId) {
    Map<String, String> errors = new HashMap<>();
    Shuttle breakfast = this.shuttleRepository.findById(id);

    Reservation reservation =
      this.reservationRepository.findOneById(reservationId);

    if (reservation == null) {
      errors.put(
        ReservationValidator.KEY_ID,
        String.format(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          reservationId
        )
      );
      this.shuttlePresenter.prepareResourceNotFoundView(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          errors
        );
    } else {
      if (breakfast == null) {
        this.shuttlePresenter.prepareResourceNotFoundView(
            BreakfastValidator.BREAKFAST_NOT_FOUND_MESSAGE,
            errors
          );
      } else {
        List<Shuttle> shuttles = new ArrayList<>(
          reservation
            .getShuttles()
            .stream()
            .filter(item -> item.getId() != id)
            .toList()
        );

        reservation =
          reservationFactory.create(
            reservation.getId(),
            reservation.getCheckIn(),
            reservation.getCheckOut(),
            reservation.getState(),
            reservation.isParking(),
            reservation.getPax(),
            reservation.getClient(),
            reservation.getPayment(),
            reservation.getRooms(),
            shuttles,
            reservation.getBreakfasts()
          );
        reservationRepository.update(reservationId, reservation);
        this.shuttleRepository.delete(id);
      }
    }
  }
}
