package com.valiha.location.infrastructure.service;

import com.valiha.location.application.repository.GenericRepository;
import com.valiha.location.core.entities.models.Car;
import com.valiha.location.infrastructure.data.CarDataMapper;
import com.valiha.location.infrastructure.repository.MongoCarRepository;
import java.util.List;
import java.util.Optional;

public class CarRepositoryImpl implements GenericRepository<Car> {

  private final MongoCarRepository carRepository;

  public CarRepositoryImpl(MongoCarRepository carRepository) {
    this.carRepository = carRepository;
  }

  @Override
  public Car save(Car entity) {
    CarDataMapper dataMapper = CarDataMapper.from(entity);
    dataMapper = this.carRepository.save(dataMapper);
    return CarDataMapper.toCar(dataMapper);
  }

  @Override
  public Car update(String id, Car entity) {
    CarDataMapper dataMapper = CarDataMapper.from(entity);
    dataMapper = this.carRepository.save(dataMapper);
    return CarDataMapper.toCar(dataMapper);
  }

  @Override
  public Car findOneById(String id) {
    Optional<CarDataMapper> optionalDataMapper =
      this.carRepository.findById(id);
    if (optionalDataMapper.isPresent()) {
      return CarDataMapper.toCar(optionalDataMapper.get());
    }
    return null;
  }

  @Override
  public List<Car> findAll() {
    List<CarDataMapper> dataMappers = this.carRepository.findAll();
    return dataMappers
      .stream()
      .map(dataMapper -> CarDataMapper.toCar(dataMapper))
      .toList();
  }

  @Override
  public void deleteById(String id) {
    this.carRepository.deleteById(id);
  }

  @Override
  public List<Car> findAllByIds(List<String> ids) {
    List<CarDataMapper> dataMappers = this.carRepository.findAllById(ids);
    return dataMappers
      .stream()
      .map(dataMapper -> CarDataMapper.toCar(dataMapper))
      .toList();
  }
}
