package com.valiha.reservation.application.interactors.reservation;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.dto.payment.PaymentRequestDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.application.dto.reservation.ReservationRequestDto;
import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.service.GenericService;
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
import java.util.HashMap;
import java.util.Map;

public class CreateReservationInteractor implements CreateReservationUseCase {

  private final GenericRepository<Reservation> reservationRepository;
  private final GenericRepository<Room> roomRepository;
  private final GenericService<ClientResponseDto, ClientRequestDto> clientService;
  private final GenericService<PaymentResponseDto, PaymentRequestDto> paymentService;
  private final GenericPresenter<ReservationResponseDto> reservationPresenter;
  private final ClientFactory clientFactory;
  private final PaymentFactory paymentFactory;
  private final ReservationFactory reservationFactory;

  public CreateReservationInteractor(
    GenericRepository<Reservation> reservationRepository,
    GenericRepository<Room> roomRepository,
    GenericService<ClientResponseDto, ClientRequestDto> clientService,
    GenericService<PaymentResponseDto, PaymentRequestDto> paymentService,
    GenericPresenter<ReservationResponseDto> reservationPresenter,
    ClientFactory clientFactory,
    PaymentFactory paymentFactory,
    ReservationFactory reservationFactory
  ) {
    this.reservationRepository = reservationRepository;
    this.roomRepository = roomRepository;
    this.clientService = clientService;
    this.paymentService = paymentService;
    this.reservationPresenter = reservationPresenter;
    this.clientFactory = clientFactory;
    this.paymentFactory = paymentFactory;
    this.reservationFactory = reservationFactory;
  }

  @Override
  public ReservationResponseDto execute(ReservationRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();
    Room room = roomRepository.findOneById(requestDto.getRoomId());

    Payment payment = paymentFactory.create(
      null,
      0,
      PaymentState.PENDING.value()
    );

    Client client = requestDto.getClient() != null
      ? clientFactory.create(
        null,
        requestDto.getClient().getFirstName(),
        requestDto.getClient().getLastName(),
        requestDto.getClient().getPhoneNumber(),
        requestDto.getClient().getEmail()
      )
      : new Client();

    Reservation reservation = reservationFactory.create(
      null,
      ReservationRequestDto.convert(
        requestDto.getCheckIn(),
        AppReservation.DATE_FORMAT
      ),
      ReservationRequestDto.convert(
        requestDto.getCheckOut(),
        AppReservation.DATE_FORMAT
      ),
      ReservationState.PENDING.value(),
      requestDto.isParking(),
      room,
      client,
      payment
    );

    errors = reservation.validate();

    if (!errors.isEmpty()) {
      return this.reservationPresenter.prepareInvalidDataView(
          ReservationValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    PaymentResponseDto paymentResponseDto =
      this.paymentService.create(
          new PaymentRequestDto(payment.getDiscount(), payment.getState())
        );

    ClientResponseDto clientResponseDto =
      this.clientService.create(requestDto.getClient());

    client =
      clientFactory.create(
        clientResponseDto.getId(),
        clientResponseDto.getFirstName(),
        clientResponseDto.getLastName(),
        clientResponseDto.getPhoneNumber(),
        clientResponseDto.getEmail()
      );

    payment =
      paymentFactory.create(
        paymentResponseDto.getId(),
        paymentResponseDto.getDiscount(),
        paymentResponseDto.getState()
      );

    reservation =
      reservationFactory.create(
        null,
        reservation.getCheckIn(),
        reservation.getCheckOut(),
        reservation.getState(),
        reservation.isParking(),
        room,
        client,
        payment
      );
    reservation = this.reservationRepository.save(reservation);

    return this.reservationPresenter.prepareSuccessView(
        ReservationResponseDto.from(reservation)
      );
  }
}
