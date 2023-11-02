package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.dto.payment.PaymentRequestDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.service.GenericService;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.infrastructure.data.ClientDataMapper;
import com.valiha.reservation.infrastructure.data.PaymentDataMapper;
import com.valiha.reservation.infrastructure.data.ReservationDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoReservationRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@AllArgsConstructor
public class ReservationRepositoryImpl implements ReservationRepository {

  private final MongoReservationRepository reservationRepository;
  private final GenericService<PaymentResponseDto, PaymentRequestDto> paymentService;
  private final GenericService<ClientResponseDto, ClientRequestDto> clientService;
  private final MongoTemplate mongoTemplate;

  @Override
  public Reservation save(Reservation reservation) {
    PaymentResponseDto paymentResponseDto =
      this.paymentService.create(
          PaymentRequestDto.from(reservation.getPayment())
        );

    ClientResponseDto clientResponseDto =
      this.clientService.create(ClientRequestDto.from(reservation.getClient()));

    ClientDataMapper clientMapper = ClientDataMapper.from(clientResponseDto);

    PaymentDataMapper paymentMapper = PaymentDataMapper.from(
      paymentResponseDto
    );

    ReservationDataMapper dataMapper = ReservationDataMapper.from(
      reservation,
      clientMapper,
      paymentMapper
    );

    dataMapper = reservationRepository.save(dataMapper);

    return ReservationDataMapper.toReservation(dataMapper);
  }

  @Override
  public Reservation update(String id, Reservation reservation) {
    ReservationDataMapper dataMapper = ReservationDataMapper.from(reservation);

    dataMapper = reservationRepository.save(dataMapper);

    return ReservationDataMapper.toReservation(dataMapper);
  }

  @Override
  public Reservation findOneById(String id) {
    Optional<ReservationDataMapper> optionalDataMapper =
      this.reservationRepository.findById(id);

    if (optionalDataMapper.isPresent()) {
      ReservationDataMapper dataMapper = optionalDataMapper.get();
      ClientResponseDto clientResponseDto = clientService.findOneById(
        dataMapper.getClientId()
      );
      PaymentResponseDto paymentResponseDto = paymentService.findOneById(
        dataMapper.getPaymentId()
      );
      return ReservationDataMapper.toReservation(
        dataMapper,
        clientResponseDto,
        paymentResponseDto
      );
    }

    return null;
  }

  @Override
  public List<Reservation> findAll() {
    List<ReservationDataMapper> dataMappers =
      this.reservationRepository.findAll();

    return toReservations(dataMappers);
  }

  @Override
  public void deleteById(String id) {
    this.reservationRepository.deleteById(id);
  }

  @Override
  public List<Reservation> findAllWithinDateRange(
    Date startDate,
    Date endDate
  ) {
    List<Criteria> criterias = this.getDateRangeCriterias(startDate, endDate);
    Criteria reservationDateRangeCriteria = new Criteria()
      .orOperator(criterias);
    Query query = new Query(reservationDateRangeCriteria);
    List<ReservationDataMapper> dataMappers = mongoTemplate.find(
      query,
      ReservationDataMapper.class
    );

    return toReservations(dataMappers);
  }

  @Override
  public boolean existsByRoomIdsWithinDateRange(
    List<String> roomIds,
    Date checkIn,
    Date checkOut
  ) {
    List<Criteria> criterias = this.getDateRangeCriterias(checkIn, checkOut);
    Criteria roomCriteria = Criteria.where("rooms.id").in(roomIds);

    Criteria reservationCriteria = new Criteria()
      .orOperator(criterias)
      .andOperator(roomCriteria);
    Query query = new Query(reservationCriteria);
    return mongoTemplate.exists(query, ReservationDataMapper.class);
  }

  private List<Criteria> getDateRangeCriterias(Date startDate, Date endDate) {
    return List.of(
      Criteria.where("checkIn").lte(startDate).and("checkOut").gte(startDate),
      Criteria.where("checkIn").lte(endDate).and("checkOut").gte(endDate),
      Criteria.where("checkIn").gte(startDate).and("checkOut").lte(endDate)
    );
  }

  private List<Reservation> toReservations(
    List<ReservationDataMapper> dataMappers
  ) {
    List<String> clientIds = new ArrayList<>();
    List<String> paymentIds = new ArrayList<>();

    dataMappers.forEach(dataMapper -> {
      clientIds.add(dataMapper.getClientId());
      paymentIds.add(dataMapper.getPaymentId());
    });

    List<ClientResponseDto> clientResponseDtos =
      this.clientService.findAllByIds(clientIds);

    List<PaymentResponseDto> paymentResponseDtos =
      this.paymentService.findAllByIds(paymentIds);

    return IntStream
      .range(0, dataMappers.size())
      .mapToObj(i -> {
        ClientResponseDto clientResponseDto = clientResponseDtos.get(i);
        PaymentResponseDto paymentResponseDto = paymentResponseDtos.get(i);
        ReservationDataMapper dataMapper = dataMappers.get(i);
        return ReservationDataMapper.toReservation(
          dataMapper,
          clientResponseDto,
          paymentResponseDto
        );
      })
      .collect(Collectors.toList());
  }

  public List<String> findRoomsIdsWithinDateRange(
    Date startDate,
    Date endDate
  ) {
    List<Criteria> criterias = this.getDateRangeCriterias(startDate, endDate);
    Criteria reservationDateRangeCriteria = new Criteria()
      .orOperator(criterias);
    Query query = new Query(reservationDateRangeCriteria);
    List<ReservationDataMapper> dataMappers = mongoTemplate.find(
      query,
      ReservationDataMapper.class
    );

    return dataMappers
      .stream()
      .flatMap(reservation ->
        reservation.getRooms().stream().map(room -> room.getId())
      )
      .toList();
  }
}
