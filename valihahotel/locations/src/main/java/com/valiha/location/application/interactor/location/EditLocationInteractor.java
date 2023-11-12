package com.valiha.location.application.interactor.location;

import com.valiha.location.application.dto.location.CommonLocationRequestDto;
import com.valiha.location.application.dto.location.LocationRequestDto;
import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.repository.LocationRepository;
import com.valiha.location.application.useCase.location.EditLocationUseCase;
import com.valiha.location.core.constants.AppLocation;
import com.valiha.location.core.constants.LocationValidator;
import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.entities.models.Location;
import com.valiha.location.core.interfaces.factory.LocationFactory;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditLocationInteractor implements EditLocationUseCase {

  private final LocationRepository locationRepository;
  private final GenericRepository<Car> carRepository;
  private final LocationFactory locationFactory;
  private final GenericPresenter<LocationResponseDto> locationPresenter;

  @Override
  public LocationResponseDto execute(
    String id,
    CommonLocationRequestDto requestDto
  ) {
    Map<String, String> errors = new HashMap<>();
    Location location = this.locationRepository.findOneById(id);
    List<Car> cars = this.carRepository.findAllByIds(requestDto.getCarIds());

    if (location == null) {
      errors.put(
        LocationValidator.KEY_ID,
        LocationValidator.LOCATION_NOT_FOUND_ERROR
      );
      return locationPresenter.prepareResourceNotFoundView(
        LocationValidator.LOCATION_NOT_FOUND_ERROR,
        errors
      );
    }

    location =
      this.locationFactory.create(
          location.getId(),
          requestDto.getState(),
          LocationRequestDto.convert(
            requestDto.getStart(),
            AppLocation.DATE_FORMAT
          ),
          LocationRequestDto.convert(
            requestDto.getEnd(),
            AppLocation.DATE_FORMAT
          ),
          requestDto.getDestination(),
          requestDto.getReason(),
          location.getClient(),
          cars,
          location.getPayment()
        );

    errors = location.validate();

    if (!errors.isEmpty()) {
      return this.locationPresenter.prepareInvalidDataView(
          LocationValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    location = this.locationRepository.update(id, location);

    return this.locationPresenter.prepareSuccessView(
        LocationResponseDto.from(location)
      );
  }
}
