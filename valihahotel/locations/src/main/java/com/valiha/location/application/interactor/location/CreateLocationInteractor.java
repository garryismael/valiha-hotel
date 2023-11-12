package com.valiha.location.application.interactor.location;

import com.valiha.location.application.dto.client.ClientRequestDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import com.valiha.location.application.dto.location.LocationRequestDto;
import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.dto.payment.PaymentRequestDto;
import com.valiha.location.application.dto.payment.PaymentResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.repository.LocationRepository;
import com.valiha.location.application.service.GenericService;
import com.valiha.location.application.useCase.location.CreateLocationUseCase;
import com.valiha.location.core.constants.AppLocation;
import com.valiha.location.core.constants.LocationState;
import com.valiha.location.core.constants.LocationValidator;
import com.valiha.location.core.constants.PaymentState;
import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.entities.models.Client;
import com.valiha.location.core.entities.models.Location;
import com.valiha.location.core.entities.models.Payment;
import com.valiha.location.core.interfaces.factory.ClientFactory;
import com.valiha.location.core.interfaces.factory.LocationFactory;
import com.valiha.location.core.interfaces.factory.PaymentFactory;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateLocationInteractor implements CreateLocationUseCase {

  private final LocationRepository locationRepository;
  private final GenericRepository<Car> carRepository;
  private final GenericService<ClientResponseDto, ClientRequestDto> clientService;
  private final GenericService<PaymentResponseDto, PaymentRequestDto> paymentService;
  private final GenericPresenter<LocationResponseDto> locationPresenter;
  private final LocationFactory locationFactory;
  private final ClientFactory clientFactory;
  private final PaymentFactory paymentFactory;

  @Override
  public LocationResponseDto execute(LocationRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();

    List<Car> cars = this.carRepository.findAllByIds(requestDto.getCarId());
    Date start = LocationRequestDto.convert(
      requestDto.getStart(),
      AppLocation.DATE_FORMAT
    );
    Date end = LocationRequestDto.convert(
      requestDto.getEnd(),
      AppLocation.DATE_FORMAT
    );

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

    Location location =
      this.locationFactory.create(
          null,
          LocationState.PENDING.value(),
          start,
          end,
          requestDto.getDestination(),
          requestDto.getReason(),
          client,
          cars,
          payment
        );
    boolean locationExists =
      this.locationRepository.existsByLocationIdWithinDateRange(
          cars.stream().map(car -> car.getId()).toList(),
          start,
          end
        );

    if (locationExists) {
      errors.put(
        LocationValidator.LOCATION_DATE_RANGE,
        LocationValidator.LOCATION_EXISTS_ERROR
      );
      return this.locationPresenter.prepareInvalidDataView(
          LocationValidator.LOCATION_EXISTS_ERROR,
          errors
        );
    }

    errors = location.validate();

    if (!errors.isEmpty()) {
      return this.locationPresenter.prepareInvalidDataView(
          LocationValidator.INVALID_DATA_MESSAGE,
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

    location =
      this.locationFactory.create(
          null,
          location.getState(),
          location.getStart(),
          location.getEnd(),
          location.getDestination(),
          location.getDestination(),
          client,
          cars,
          payment
        );

    location = this.locationRepository.save(location);

    return this.locationPresenter.prepareSuccessView(
        LocationResponseDto.from(location)
      );
  }
}
