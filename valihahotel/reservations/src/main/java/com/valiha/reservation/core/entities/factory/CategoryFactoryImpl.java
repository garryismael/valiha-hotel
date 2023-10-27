package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.interfaces.factory.CategoryFactory;

public class CategoryFactoryImpl implements CategoryFactory {

  @Override
  public Category create(
    String id,
    String title,
    String type,
    int pax,
    int bigBed,
    int smallBed,
    String image
  ) {
    return Category
      .builder()
      .id(id)
      .title(title)
      .type(type)
      .pax(pax)
      .bigBed(bigBed)
      .smallBed(smallBed)
      .image(image)
      .build();
  }
}
