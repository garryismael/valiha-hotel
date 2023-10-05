package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Room;
import java.util.Date;
import java.util.List;

public interface RoomRepository {
  Room save(Room entity);

  Room update(String id, Room entity);

  Room findOneById(String id);

  List<Room> findAll();

  List<Room> findAllAvailableRooms(
    Date checkIn,
    Date checkOut,
    String categoryType,
    int adult,
    int kid
  );

  List<Room> findAllByCategory(String id);

  void deleteById(String id);
}
