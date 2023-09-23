package com.valiha.location.application.interactor.car;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.presenter.GenericPresenter;
import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.application.service.StorageService;
import com.valiha.location.application.useCase.car.RegisterCarUseCase;
import com.valiha.location.core.constants.CarValidator;
import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.interfaces.factory.CarFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class RegisterCarInteractor implements RegisterCarUseCase {

  private final GenericRepository<Car> carRepository;
  private final GenericPresenter<CarResponseDto> carPresenter;
  private final StorageService storageService;
  private final CarFactory carFactory;

  public RegisterCarInteractor(
    GenericRepository<Car> carRepository,
    GenericPresenter<CarResponseDto> carPresenter,
    StorageService storageService,
    CarFactory carFactory
  ) {
    this.carRepository = carRepository;
    this.carPresenter = carPresenter;
    this.storageService = storageService;
    this.carFactory = carFactory;
  }

  @Override
  public CarResponseDto execute(CarRequestDto requestDto, File file) {
    Map<String, String> errors = new HashMap<>();
    String image = null;
    try {
      image = this.storageService.upload(file, "cars");
    } catch (IOException exception) {
      errors.put(CarValidator.KEY_IMAGE, CarValidator.UPLOAD_IMAGE_ERROR);
    }

    Car car =
      this.carFactory.create(
          null,
          requestDto.getMark(),
          requestDto.getTraining(),
          requestDto.getMileage(),
          requestDto.getDoor(),
          requestDto.getPlace(),
          requestDto.getYear(),
          image,
          requestDto.getPrice()
        );

    errors.putAll(car.validate());

    if (!errors.isEmpty()) {
      return this.carPresenter.prepareInvalidDataView(
          CarValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    car = this.carRepository.save(car);

    return this.carPresenter.prepareSuccessView(CarResponseDto.from(car));
  }
}
