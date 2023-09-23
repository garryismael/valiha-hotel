package com.valiha.location.application.dto.car;

import com.valiha.location.core.entities.models.Car;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarResponseDto {

  private String id;
  private String mark;
  private int training;
  private int mileage;
  private int door;
  private int place;
  private int year;
  private String image;
  private int price;

  public static CarResponseDto from(Car car) {
    return CarResponseDto
      .builder()
      .id(car.getId())
      .mark(car.getMark())
      .training(car.getTraining())
      .mileage(car.getMileage())
      .door(car.getDoor())
      .place(car.getPlace())
      .year(car.getYear())
      .image(car.getImage())
      .price(car.getPrice())
      .build();
  }

  public static List<CarResponseDto> from(List<Car> cars) {
    return cars.stream().map(CarResponseDto::from).toList();
  }
}
