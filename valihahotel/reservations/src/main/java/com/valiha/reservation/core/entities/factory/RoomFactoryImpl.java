package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.RoomFactory;

public class RoomFactoryImpl implements RoomFactory {

  @Override
  public Room create(
    String id,
    String title,
    int price,
    boolean isAvailable,
    String image,
    Category category
  ) {
    return Room
      .builder()
      .id(id)
      .title(title)
      .price(price)
      .isAvailable(isAvailable)
      .image(image)
      .category(category)
      .build();
  }
}
