package com.valiha.location.core.interfaces.factory;

import com.valiha.location.core.entities.models.Car;

public interface CarFactory {
  Car create(
    String id,
    String mark,
    int training,
    int mileage,
    int door,
    int place,
    int year,
    String image,
    int price
  );
}
