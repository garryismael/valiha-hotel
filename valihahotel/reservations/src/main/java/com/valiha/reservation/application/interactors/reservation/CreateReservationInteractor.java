package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.breakfast.BreakfastRequestDto;
import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleRequestDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.application.service.NotificationService;
import com.valiha.reservation.application.useCase.reservation.CreateReservationUseCase;
import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.BreakfastState;
import com.valiha.reservation.core.constant.PaymentState;
import com.valiha.reservation.core.constant.ReservationState;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.constant.ShuttleState;
import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.core.interfaces.factory.BreakfastFactory;
import com.valiha.reservation.core.interfaces.factory.ClientFactory;
import com.valiha.reservation.core.interfaces.factory.PaymentFactory;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import com.valiha.reservation.core.interfaces.factory.ShuttleFactory;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
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
  private final ShuttleFactory shuttleFactory;
  private final BreakfastFactory breakfastFactory;
  private final NotificationService notificationService;

  @Override
  public ReservationResponseDto execute(ReservationRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();
    ClientRequestDto clientRequestDto = requestDto.getClient();
    List<ShuttleRequestDto> shuttleRequestDtos = requestDto.getShuttles();
    List<BreakfastRequestDto> breakfastRequestDtos = requestDto.getBreakfasts();

    List<String> ids = requestDto.getRoomIds();

    if (ids == null || ids.isEmpty()) {
      errors.put(
        ReservationValidator.KEY_ROOMS,
        ReservationValidator.INVALID_ROOMS_ERROR
      );
      return this.reservationPresenter.prepareInvalidDataView(
          ReservationValidator.KEY_ROOMS,
          errors
        );
    }

    List<Room> rooms = roomRepository.findAllByIds(ids);
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

    Client client = clientRequestDto != null
      ? clientFactory.create(
        null,
        clientRequestDto.getFirstName(),
        clientRequestDto.getLastName(),
        clientRequestDto.getPhoneNumber(),
        clientRequestDto.getEmail()
      )
      : new Client();

    List<Shuttle> shuttles = shuttleRequestDtos != null
      ? shuttleRequestDtos
        .stream()
        .map(dto ->
          shuttleFactory.create(
            null,
            dto.getFlightName(),
            dto.getFlightNumber(),
            DateFormatter.parseToDateTime(
              dto.getDate(),
              AppReservation.DATE_TIME_FORMAT
            ),
            dto.getDestination(),
            ShuttleState.PENDING.value()
          )
        )
        .toList()
      : new ArrayList<>();

    List<Breakfast> breakfasts = breakfastRequestDtos != null
      ? breakfastRequestDtos
        .stream()
        .map(dto ->
          breakfastFactory.create(
            null,
            DateFormatter.parseToDate(
              dto.getDate(),
              AppReservation.DATE_FORMAT
            ),
            BreakfastState.PENDING.value()
          )
        )
        .toList()
      : new ArrayList<>();

    boolean reservationExists = reservationRepository.existsByRoomIdsWithinDateRange(
      ids,
      checkIn,
      checkOut
    );

    if (reservationExists) {
      errors.put(
        ReservationValidator.RESERVATION_DATE_RANGE,
        ReservationValidator.RESERVATION_EXISTS_ERRORS
      );
      return this.reservationPresenter.prepareInvalidDataView(
          ReservationValidator.RESERVATION_EXISTS_ERRORS,
          errors
        );
    }

    Reservation reservation = reservationFactory.create(
      null,
      checkIn,
      checkOut,
      ReservationState.PENDING.value(),
      requestDto.isParking(),
      requestDto.getPax(),
      client,
      payment,
      rooms,
      shuttles,
      breakfasts
    );

    errors = reservation.validate();

    if (!errors.isEmpty()) {
      return this.reservationPresenter.prepareInvalidDataView(
          ReservationValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    reservation = this.reservationRepository.save(reservation);

    ReservationResponseDto responseDto = ReservationResponseDto.from(
      reservation
    );
    notificationService.execute(responseDto);
    return this.reservationPresenter.prepareSuccessView(responseDto);
  }
}
