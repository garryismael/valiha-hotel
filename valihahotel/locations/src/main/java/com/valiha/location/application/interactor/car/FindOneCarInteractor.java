package com.valiha.location.application.interactor.car;

import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.useCase.car.FindOneCarUseCase;
import com.valiha.location.core.constants.CarValidator;
import com.valiha.location.core.entities.models.Car;
import java.util.HashMap;
import java.util.Map;

public class FindOneCarInteractor implements FindOneCarUseCase {

  private final GenericRepository<Car> carRepository;
  private final GenericPresenter<CarResponseDto> carPresenter;

  public FindOneCarInteractor(
    GenericRepository<Car> carRepository,
    GenericPresenter<CarResponseDto> carPresenter
  ) {
    this.carRepository = carRepository;
    this.carPresenter = carPresenter;
  }

  @Override
  public CarResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<>();
    Car car = this.carRepository.findOneById(id);

    if (car == null) {
      errors.put(CarValidator.KEY_ID, CarValidator.CAR_NOT_FOUND_ERROR);
      return carPresenter.prepareResourceNotFoundView(
        CarValidator.CAR_NOT_FOUND_ERROR,
        errors
      );
    }

    return this.carPresenter.prepareSuccessView(CarResponseDto.from(car));
  }
}
