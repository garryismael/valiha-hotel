package com.valiha.reservation.application.interactors.breakfast;

import com.valiha.reservation.application.dto.breakfast.BreakfastBaseRequestDto;
import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.BreakfastRepository;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.useCase.breakfast.CreateBreakfastUseCase;
import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.BreakfastState;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.constant.ShuttleValidator;
import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.interfaces.factory.BreakfastFactory;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateBreakfastInteractor implements CreateBreakfastUseCase {

  private final ReservationRepository reservationRepository;
  private final BreakfastRepository breakfastRepository;
  private final GenericPresenter<BreakfastResponseDto> breakfastPresenter;
  private final BreakfastFactory breakfastFactory;
  private final ReservationFactory reservationFactory;

  @Override
  public BreakfastResponseDto execute(
    String reservationId,
    BreakfastBaseRequestDto dto
  ) {
    Map<String, String> errors = new HashMap<>();
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
      return this.breakfastPresenter.prepareResourceNotFoundView(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          errors
        );
    }

    Breakfast breakfast = breakfastFactory.create(
      null,
      DateFormatter.parseToDate(dto.getDate(), AppReservation.DATE_FORMAT),
      BreakfastState.PENDING.value()
    );

    errors = breakfast.validate();

    if (!errors.isEmpty()) {
      return this.breakfastPresenter.prepareInvalidDataView(
          ShuttleValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    breakfast = this.breakfastRepository.create(breakfast);

    List<Breakfast> breakfasts = reservation.getBreakfasts();

    reservation =
      reservationFactory.create(
        reservation.getId(),
        reservation.getCheckIn(),
        reservation.getCheckOut(),
        reservation.getState(),
        reservation.isParking(),
        reservation.getClient(),
        reservation.getPayment(),
        reservation.getRooms(),
        reservation.getShuttles(),
        breakfasts
      );
    reservationRepository.update(reservationId, reservation);

    return this.breakfastPresenter.prepareSuccessView(
        BreakfastResponseDto.from(breakfast)
      );
  }
}
