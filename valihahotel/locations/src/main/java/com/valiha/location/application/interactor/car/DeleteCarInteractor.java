package com.valiha.location.application.interactor.car;

import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.useCase.car.DeleteCarUseCase;
import com.valiha.location.core.constants.CarValidator;
import com.valiha.location.core.entities.models.Car;
import java.util.HashMap;
import java.util.Map;

public class DeleteCarInteractor implements DeleteCarUseCase {

  private final GenericRepository<Car> carRepository;
  private final GenericPresenter<CarResponseDto> carPresenter;

  public DeleteCarInteractor(
    GenericRepository<Car> carRepository,
    GenericPresenter<CarResponseDto> carPresenter
  ) {
    this.carRepository = carRepository;
    this.carPresenter = carPresenter;
  }

  @Override
  public void execute(String id) {
    Car car = this.carRepository.findOneById(id);

    if (car == null) {
      Map<String, String> errors = new HashMap<>();
      errors.put(CarValidator.KEY_ID, CarValidator.CAR_NOT_FOUND_ERROR);
      carPresenter.prepareResourceNotFoundView(
        CarValidator.CAR_NOT_FOUND_ERROR,
        errors
      );
    }

    this.carRepository.deleteById(id);
  }
}
