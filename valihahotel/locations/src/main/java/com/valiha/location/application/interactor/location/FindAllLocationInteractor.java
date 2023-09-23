package com.valiha.location.application.interactor.location;

import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.useCase.location.FindAllLocationUseCase;
import com.valiha.location.core.entities.models.Location;
import java.util.List;

public class FindAllLocationInteractor implements FindAllLocationUseCase {

  private final GenericRepository<Location> locationRepository;
  private final GenericPresenter<LocationResponseDto> locationPresenter;

  public FindAllLocationInteractor(
    GenericRepository<Location> locationRepository,
    GenericPresenter<LocationResponseDto> locationPresenter
  ) {
    this.locationRepository = locationRepository;
    this.locationPresenter = locationPresenter;
  }

  @Override
  public List<LocationResponseDto> execute() {
    List<Location> locations = this.locationRepository.findAll();

    return this.locationPresenter.prepareSuccessView(
        LocationResponseDto.from(locations)
      );
  }
}
