package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;

public interface RoomFactory {
  Room create(
    String id,
    String title,
    String type,
    int price,
    String image,
    Category category
  );

  Room create(
    String title,
    String type,
    int price,
    String image,
    Category category
  );
}
