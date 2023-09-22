package com.valiha.location.core.interfaces.models;

public interface ICar {
  String getId();

  String getMark();

  int getTraining();

  int getMileage();

  int getDoor();

  int getPlace();

  int getYear();

  String getImage();

  int getPrice();

  boolean markIsValid();

  boolean trainingIsValid();

  boolean mileageIsValid();

  boolean doorIsValid();

  boolean placeIsValid();

  boolean yearIsValid();

  boolean priceIsValid();
}
