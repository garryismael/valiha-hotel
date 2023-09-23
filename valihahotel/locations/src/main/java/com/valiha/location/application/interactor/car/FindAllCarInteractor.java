package com.valiha.location.application.interactor.car;

import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.useCase.car.FindAllCarsUseCase;
import com.valiha.location.core.entities.models.Car;
import java.util.List;

public class FindAllCarInteractor implements FindAllCarsUseCase {

  private final GenericRepository<Car> carRepository;
  private final GenericPresenter<CarResponseDto> carPresenter;

  public FindAllCarInteractor(
    GenericRepository<Car> carRepository,
    GenericPresenter<CarResponseDto> carPresenter
  ) {
    this.carRepository = carRepository;
    this.carPresenter = carPresenter;
  }

  @Override
  public List<CarResponseDto> execute() {
    List<Car> cars = this.carRepository.findAll();
    return this.carPresenter.prepareSuccessView(CarResponseDto.from(cars));
  }
}
