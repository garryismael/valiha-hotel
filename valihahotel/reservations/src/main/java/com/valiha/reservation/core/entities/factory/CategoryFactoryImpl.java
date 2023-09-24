package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.interfaces.factory.CategoryFactory;

public class CategoryFactoryImpl implements CategoryFactory {

  @Override
  public Category create(
    String id,
    String title,
    int adult,
    int kid,
    int bigBed,
    int smallBed,
    String image
  ) {
    return Category
      .builder()
      .id(id)
      .title(title)
      .adult(adult)
      .kid(kid)
      .bigBed(bigBed)
      .smallBed(smallBed)
      .image(image)
      .build();
  }
}
