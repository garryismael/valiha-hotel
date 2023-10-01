package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;

public interface RoomFactory {
  Room create(
    String id,
    String title,
    int price,
    String image,
    Category category
  );
}
