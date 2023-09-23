package com.valiha.location.application.interactor.location;

import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.useCase.location.DeleteLocationUseCase;
import com.valiha.location.core.constants.LocationValidator;
import com.valiha.location.core.entities.models.Location;
import java.util.HashMap;
import java.util.Map;

public class DeleteLocationInteractor implements DeleteLocationUseCase {

  private final GenericRepository<Location> locationRepository;
  private final GenericPresenter<LocationResponseDto> locationPresenter;

  public DeleteLocationInteractor(
    GenericRepository<Location> locationRepository,
    GenericPresenter<LocationResponseDto> locationPresenter
  ) {
    this.locationRepository = locationRepository;
    this.locationPresenter = locationPresenter;
  }

  @Override
  public void execute(String id) {
    Location location = this.locationRepository.findOneById(id);

    if (location == null) {
      Map<String, String> errors = new HashMap<>();
      errors.put(
        LocationValidator.KEY_ID,
        LocationValidator.LOCATION_NOT_FOUND_ERROR
      );
      locationPresenter.prepareResourceNotFoundView(
        LocationValidator.LOCATION_NOT_FOUND_ERROR,
        errors
      );
    }

    this.locationRepository.deleteById(id);
  }
}
