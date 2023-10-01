package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.reservation.CommonReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.useCase.reservation.EditReservationUseCase;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditReservationInteractor implements EditReservationUseCase {

  private final ReservationRepository reservationRepository;
  private final GenericRepository<Room> roomRepository;
  private final GenericPresenter<ReservationResponseDto> reservationPresenter;
  private final ReservationFactory reservationFactory;

  @Override
  public ReservationResponseDto execute(
    String id,
    CommonReservationRequestDto requestDto
  ) {
    Map<String, String> errors = new HashMap<>();

    Reservation reservation = this.reservationRepository.findOneById(id);

    if (reservation == null) {
      errors.put(
        ReservationValidator.KEY_ID,
        String.format(ReservationValidator.RESERVATION_NOT_FOUND_ERROR, id)
      );
      return this.reservationPresenter.prepareResourceNotFoundView(
          ReservationValidator.RESERVATION_NOT_FOUND_ERROR,
          errors
        );
    }

    Room room = roomRepository.findOneById(requestDto.getRoomId());

    reservation =
      reservationFactory.create(
        reservation.getId(),
        ReservationRequestDto.convert(
          requestDto.getCheckIn(),
          AppReservation.DATE_FORMAT
        ),
        ReservationRequestDto.convert(
          requestDto.getCheckOut(),
          AppReservation.DATE_FORMAT
        ),
        requestDto.getState(),
        requestDto.isParking(),
        room,
        reservation.getClient(),
        reservation.getPayment()
      );

    errors = reservation.validate();

    if (!errors.isEmpty()) {
      return this.reservationPresenter.prepareInvalidDataView(
          ReservationValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    reservation = this.reservationRepository.update(id, reservation);

    return this.reservationPresenter.prepareSuccessView(
        ReservationResponseDto.from(reservation)
      );
  }
}
