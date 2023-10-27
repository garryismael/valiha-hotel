package com.valiha.location.application.interactor.location;

import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.LocationRepository;
import com.valiha.location.application.useCase.location.FindAllLocationUseCase;
import com.valiha.location.core.entities.models.Location;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FindAllLocationInteractor implements FindAllLocationUseCase {

  private final LocationRepository locationRepository;
  private final GenericPresenter<LocationResponseDto> locationPresenter;

  @Override
  public List<LocationResponseDto> execute() {
    List<Location> locations = this.locationRepository.findAll();

    return this.locationPresenter.prepareSuccessView(
        LocationResponseDto.from(locations)
      );
  }
}
