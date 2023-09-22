package com.valiha.location.core.entities.factory;

import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.interfaces.factory.CarFactory;

public class CarFactoryImpl implements CarFactory {

  @Override
  public Car create(
    String id,
    String mark,
    int training,
    int mileage,
    int door,
    int place,
    int year,
    String image,
    int price
  ) {
    return Car
      .builder()
      .id(id)
      .mark(mark)
      .training(training)
      .mileage(mileage)
      .door(door)
      .place(place)
      .year(year)
      .image(image)
      .price(price)
      .build();
  }
}
