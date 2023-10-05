package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.application.useCase.reservation.CreateReservationUseCase;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.PaymentState;
import com.valiha.reservation.core.constant.ReservationState;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.ClientFactory;
import com.valiha.reservation.core.interfaces.factory.PaymentFactory;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateReservationInteractor implements CreateReservationUseCase {

  private final ReservationRepository reservationRepository;
  private final RoomRepository roomRepository;
  private final GenericPresenter<ReservationResponseDto> reservationPresenter;
  private final ClientFactory clientFactory;
  private final PaymentFactory paymentFactory;
  private final ReservationFactory reservationFactory;

  @Override
  public ReservationResponseDto execute(ReservationRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();
    Room room = roomRepository.findOneById(requestDto.getRoomId());
    Date checkIn = ReservationRequestDto.convert(
      requestDto.getCheckIn(),
      AppReservation.DATE_FORMAT
    );

    Date checkOut = ReservationRequestDto.convert(
      requestDto.getCheckOut(),
      AppReservation.DATE_FORMAT
    );

    Payment payment = paymentFactory.create(
      null,
      0,
      PaymentState.PENDING.value()
    );

    ClientRequestDto clientRequestDto = requestDto.getClient();
    Client client = clientRequestDto != null
      ? clientFactory.create(
        null,
        clientRequestDto.getFirstName(),
        clientRequestDto.getLastName(),
        clientRequestDto.getPhoneNumber(),
        clientRequestDto.getEmail()
      )
      : new Client();

    Reservation reservation = reservationFactory.create(
      null,
      checkIn,
      checkOut,
      ReservationState.PENDING.value(),
      requestDto.isParking(),
      room,
      client,
      payment
    );

    boolean reservationExists = reservationRepository.existsByRoomIdWithinDateRange(
      requestDto.getRoomId(),
      checkIn,
      checkOut
    );

    if (reservationExists) {
      errors.put(
        ReservationValidator.INVALID_CHECK_IN_ERROR,
        ReservationValidator.RESERVATION_EXISTS_ERRORS
      );
    }

    errors.putAll(reservation.validate());

    if (!errors.isEmpty()) {
      return this.reservationPresenter.prepareInvalidDataView(
          ReservationValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    reservation = this.reservationRepository.save(reservation);

    return this.reservationPresenter.prepareSuccessView(
        ReservationResponseDto.from(reservation)
      );
  }
}
