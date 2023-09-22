package com.valiha.location.core.entities.models;

import com.valiha.location.core.interfaces.models.ICar;
import com.valiha.location.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
