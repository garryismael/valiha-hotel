package com.valiha.location.application.dto.car;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CarRequestDto {

  private String mark;
  private int training;
  private int mileage;
  private int door;
  private int place;
  private int year;
  private int price;
}
