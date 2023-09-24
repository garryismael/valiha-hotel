package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.client.ClientRequestDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import com.valiha.location.application.dto.payment.PaymentRequestDto;
import com.valiha.location.application.dto.payment.PaymentResponseDto;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.service.GenericService;
import com.valiha.location.core.entities.models.Location;
import com.valiha.location.infrastructure.data.CarDataMapper;
import com.valiha.location.infrastructure.data.ClientDataMapper;
import com.valiha.location.infrastructure.data.LocationDataMapper;
import com.valiha.location.infrastructure.data.PaymentDataMapper;
import com.valiha.location.infrastructure.repository.MongoLocationRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class LocationRepositoryImpl implements GenericRepository<Location> {

  private final MongoLocationRepository locationRepository;
  private final GenericService<PaymentResponseDto, PaymentRequestDto> paymentService;
  private final GenericService<ClientResponseDto, ClientRequestDto> clientService;

  public LocationRepositoryImpl(
    MongoLocationRepository locationRepository,
    GenericService<PaymentResponseDto, PaymentRequestDto> paymentService,
    GenericService<ClientResponseDto, ClientRequestDto> clientService
  ) {
    this.locationRepository = locationRepository;
    this.paymentService = paymentService;
    this.clientService = clientService;
  }

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
      return toLocation(dataMapper, clientResponseDto, paymentResponseDto);
    }
    return null;
  }

  @Override
  public List<Location> findAll() {
    List<LocationDataMapper> dataMappers = this.locationRepository.findAll();
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

  @Override
  public void deleteById(String id) {
    this.locationRepository.deleteById(id);
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
      .car(CarDataMapper.toCar(dataMapper.getCar()))
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
      .car(CarDataMapper.toCar(dataMapper.getCar()))
      .payment(PaymentDataMapper.toPayment(dataMapper.getPayment()))
      .build();
  }
}
