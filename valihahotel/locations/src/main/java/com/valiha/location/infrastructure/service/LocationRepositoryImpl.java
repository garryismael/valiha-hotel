package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.client.ClientRequestDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import com.valiha.location.application.dto.payment.PaymentRequestDto;
import com.valiha.location.application.dto.payment.PaymentResponseDto;
import com.valiha.location.application.repository.LocationRepository;
import com.valiha.location.application.service.GenericService;
import com.valiha.location.core.entities.models.Location;
import com.valiha.location.infrastructure.data.CarDataMapper;
import com.valiha.location.infrastructure.data.ClientDataMapper;
import com.valiha.location.infrastructure.data.LocationDataMapper;
import com.valiha.location.infrastructure.data.PaymentDataMapper;
import com.valiha.location.infrastructure.repository.MongoLocationRepository;
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
public class LocationRepositoryImpl implements LocationRepository {

  private final MongoLocationRepository locationRepository;
  private final GenericService<PaymentResponseDto, PaymentRequestDto> paymentService;
  private final GenericService<ClientResponseDto, ClientRequestDto> clientService;
  private final MongoTemplate mongoTemplate;

  @Override
  public Location save(Location entity) {
    LocationDataMapper dataMapper = LocationDataMapper.from(entity);
    dataMapper = this.locationRepository.save(dataMapper);
    return toLocation(dataMapper);
  }

  @Override
  public Location update(String id, Location entity) {
    LocationDataMapper dataMapper = LocationDataMapper.from(entity);
    dataMapper = this.locationRepository.save(dataMapper);
    return toLocation(dataMapper);
  }

  @Override
  public Location findOneById(String id) {
    Optional<LocationDataMapper> optionalDataMapper =
      this.locationRepository.findById(id);

    if (optionalDataMapper.isPresent()) {
      LocationDataMapper dataMapper = optionalDataMapper.get();

      PaymentResponseDto paymentResponseDto = paymentService.findOneById(
        dataMapper.getPaymentId()
      );

      ClientResponseDto clientResponseDto = clientService.findOneById(
        dataMapper.getClientId()
      );
      System.out.println(optionalDataMapper.get().getState());
      return toLocation(dataMapper, clientResponseDto, paymentResponseDto);
    }
    return null;
  }

  @Override
  public List<Location> findAll() {
    List<LocationDataMapper> dataMappers = this.locationRepository.findAll();
    return toLocations(dataMappers);
  }

  @Override
  public List<Location> findLocationsWithinDateRange(
    Date startDate,
    Date endDate
  ) {
    List<Criteria> criterias = getDateRangeCriterias(startDate, endDate);
    Criteria locationDateRangeCriteria = new Criteria().orOperator(criterias);
    Query query = new Query(locationDateRangeCriteria);
    List<LocationDataMapper> dataMappers = mongoTemplate.find(
      query,
      LocationDataMapper.class
    );

    return toLocations(dataMappers);
  }

  @Override
  public void deleteById(String id) {
    this.locationRepository.deleteById(id);
  }

  private List<Criteria> getDateRangeCriterias(Date startDate, Date endDate) {
    return List.of(
      Criteria.where("start").lte(startDate).and("end").gte(startDate),
      Criteria.where("start").lte(endDate).and("end").gte(endDate),
      Criteria.where("start").gte(startDate).and("end").lte(endDate)
    );
  }

  private List<Location> toLocations(List<LocationDataMapper> dataMappers) {
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
        LocationDataMapper dataMapper = dataMappers.get(i);
        return toLocation(dataMapper, clientResponseDto, paymentResponseDto);
      })
      .collect(Collectors.toList());
  }

  private Location toLocation(
    LocationDataMapper dataMapper,
    ClientResponseDto clientResponseDto,
    PaymentResponseDto paymentResponseDto
  ) {
    return Location
      .builder()
      .id(dataMapper.getId())
      .state(dataMapper.getState())
      .start(dataMapper.getStart())
      .end(dataMapper.getEnd())
      .destination(dataMapper.getDestination())
      .reason(dataMapper.getReason())
      .client(ClientDataMapper.toClient(clientResponseDto))
      .cars(CarDataMapper.toCar(dataMapper.getCars()))
      .payment(PaymentDataMapper.toPayment(paymentResponseDto))
      .build();
  }

  private Location toLocation(LocationDataMapper dataMapper) {
    return Location
      .builder()
      .id(dataMapper.getId())
      .state(dataMapper.getState())
      .start(dataMapper.getStart())
      .end(dataMapper.getEnd())
      .destination(dataMapper.getDestination())
      .reason(dataMapper.getReason())
      .client(ClientDataMapper.toClient(dataMapper.getClient()))
      .cars(CarDataMapper.toCar(dataMapper.getCars()))
      .payment(PaymentDataMapper.toPayment(dataMapper.getPayment()))
      .build();
  }

  @Override
  public boolean existsByLocationIdWithinDateRange(
    List<String> carIds,
    Date checkIn,
    Date checkOut
  ) {
    List<Criteria> criterias = this.getDateRangeCriterias(checkIn, checkOut);
    Criteria roomCriteria = Criteria.where("cars.id").in(carIds);

    Criteria reservationCriteria = new Criteria()
      .orOperator(criterias)
      .andOperator(roomCriteria);
    Query query = new Query(reservationCriteria);
    return mongoTemplate.exists(query, LocationDataMapper.class);
  }
}
