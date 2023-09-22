package com.valiha.location.core.entities.models;

import com.valiha.location.core.interfaces.models.ICar;
import com.valiha.location.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Car implements ICar, InputValidator {

  private String id;
  private String mark;
  private int training;
  private int mileage;
  private int door;
  private int place;
  private int year;
  private String image;
  private int price;

  public class Builder {

    private final Car car;

    public Builder(Car car) {
      this.car = car;
    }

    public Builder id(String value) {
      car.id = value;
      return this;
    }

    public Builder mark(String value) {
      car.mark = value;
      return this;
    }

    public Builder training(int value) {
      car.training = value;
      return this;
    }

    public Builder mileage(int value) {
      car.mileage = value;
      return this;
    }

    public Builder door(int value) {
      car.door = value;
      return this;
    }

    public Builder place(int value) {
      car.place = value;
      return this;
    }

    public Builder year(int value) {
      car.year = value;
      return this;
    }

    public Builder image(String value) {
      car.image = value;
      return this;
    }

    public Builder price(int value) {
      car.price = value;
      return this;
    }

    public Car build() {
      return this.car;
    }
  }

  public static Builder builder() {
    Car car = new Car();
    return car.new Builder(car);
  }

  @Override
  public boolean markIsValid() {
    return this.mark != null && this.mark.length() >= 2;
  }

  @Override
  public boolean trainingIsValid() {
    return this.training >= 0;
  }

  @Override
  public boolean mileageIsValid() {
    return this.mileage >= 0;
  }

  @Override
  public boolean doorIsValid() {
    return this.door >= 2;
  }

  @Override
  public boolean placeIsValid() {
    return this.place >= 2;
  }

  @Override
  public boolean yearIsValid() {
    return this.year >= 1998;
  }

  @Override
  public boolean priceIsValid() {
    return this.price > 0;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    return errors;
  }
}
