package com.valiha.reservation.application.interactors.breakfast;

import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.BreakfastRepository;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.useCase.breakfast.DeleteBreakfastUseCase;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteBreakfastInteractor implements DeleteBreakfastUseCase {

  private final ReservationRepository reservationRepository;
  private final BreakfastRepository breakfastRepository;
  private final GenericPresenter<BreakfastResponseDto> breakfastPresenter;
  private final ReservationFactory reservationFactory;

  @Override
  public void execute(String id, String reservationId) {
    Map<String, String> errors = new HashMap<>();
    Breakfast breakfast = this.breakfastRepository.findById(id);
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
      this.breakfastPresenter.prepareResourceNotFoundView(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          errors
        );
    } else {
      if (breakfast == null) {
        this.breakfastPresenter.prepareResourceNotFoundView(
            BreakfastValidator.BREAKFAST_NOT_FOUND_MESSAGE,
            errors
          );
      } else {
        List<Breakfast> breakfasts = new ArrayList<>(
          reservation
            .getBreakfasts()
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
            reservation.getShuttles(),
            breakfasts
          );
        reservationRepository.update(reservationId, reservation);

        this.breakfastRepository.delete(id);
      }
    }
  }
}
