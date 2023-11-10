package com.valiha.reservation.application.interactors.shuttle;

import com.valiha.reservation.application.dto.shuttle.ShuttleBaseRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.repository.ShuttleRepository;
import com.valiha.reservation.application.useCase.shuttle.CreateShuttleUseCase;
import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.constant.ShuttleState;
import com.valiha.reservation.core.constant.ShuttleValidator;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import com.valiha.reservation.core.interfaces.factory.ShuttleFactory;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateShuttleInteractor implements CreateShuttleUseCase {

  private final ReservationRepository reservationRepository;
  private final ShuttleRepository shuttleRepository;
  private final GenericPresenter<ShuttleResponseDto> shuttlePresenter;
  private final ShuttleFactory shuttleFactory;
  private final ReservationFactory reservationFactory;

  @Override
  public ShuttleResponseDto execute(
    String reservationId,
    ShuttleBaseRequestDto dto
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
      return this.shuttlePresenter.prepareResourceNotFoundView(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          errors
        );
    }

    Shuttle shuttle = shuttleFactory.create(
      null,
      dto.getFlightName(),
      dto.getFlightNumber(),
      DateFormatter.parseToDateTime(
        dto.getDate(),
        AppReservation.DATE_TIME_FORMAT
      ),
      dto.getDestination(),
      ShuttleState.PENDING.value()
    );

    errors = shuttle.validate();

    if (!errors.isEmpty()) {
      return this.shuttlePresenter.prepareInvalidDataView(
          ShuttleValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    shuttle = this.shuttleRepository.create(shuttle);
    List<Shuttle> shuttles = reservation.getShuttles();
    shuttles.add(shuttle);

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
        shuttles,
        reservation.getBreakfasts()
      );
    reservationRepository.update(reservationId, reservation);

    return this.shuttlePresenter.prepareSuccessView(
        ShuttleResponseDto.from(shuttle)
      );
  }
}
