package com.valiha.location.application.interactor.location;

import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.LocationRepository;
import com.valiha.location.application.useCase.location.FindOneLocationUseCase;
import com.valiha.location.core.constants.LocationValidator;
import com.valiha.location.core.entities.models.Location;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FindOneLocationInteractor implements FindOneLocationUseCase {

  private final LocationRepository locationRepository;
  private final GenericPresenter<LocationResponseDto> locationPresenter;

  @Override
  public LocationResponseDto execute(String id) {
    Location location = this.locationRepository.findOneById(id);

    if (location == null) {
      Map<String, String> errors = new HashMap<>();
      errors.put(
        LocationValidator.KEY_ID,
        LocationValidator.LOCATION_NOT_FOUND_ERROR
      );
      return locationPresenter.prepareResourceNotFoundView(
        LocationValidator.LOCATION_NOT_FOUND_ERROR,
        errors
      );
    }

    return this.locationPresenter.prepareSuccessView(
        LocationResponseDto.from(location)
      );
  }
}
