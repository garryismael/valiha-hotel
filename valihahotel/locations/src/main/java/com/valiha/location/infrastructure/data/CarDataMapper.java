package com.valiha.location.infrastructure.data;

import com.valiha.location.core.entities.models.Car;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "cars")
@Builder
@Data
public class CarDataMapper {

  private String id;
  private String mark;
  private int training;
  private int mileage;
  private int door;
  private int place;
  private int year;
  private int price;
  private String image;

  public static Car toCar(CarDataMapper dataMapper) {
    return Car
      .builder()
      .id(dataMapper.id)
      .mark(dataMapper.mark)
      .training(dataMapper.training)
      .mileage(dataMapper.mileage)
      .door(dataMapper.door)
      .place(dataMapper.place)
      .year(dataMapper.year)
      .price(dataMapper.price)
      .image(dataMapper.image)
      .build();
  }

  public static CarDataMapper from(Car car) {
    return CarDataMapper
      .builder()
      .id(car.getId())
      .mark(car.getMark())
      .training(car.getTraining())
      .mileage(car.getMileage())
      .door(car.getDoor())
      .place(car.getPlace())
      .year(car.getYear())
      .price(car.getPrice())
      .image(car.getImage())
      .build();
  }

  public static List<CarDataMapper> from(List<Car> cars) {
    return cars.stream().map(CarDataMapper::from).toList();
  }
}
