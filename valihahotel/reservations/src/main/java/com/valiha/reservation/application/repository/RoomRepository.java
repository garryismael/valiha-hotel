package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Room;
import java.util.Date;
import java.util.List;

public interface RoomRepository {
  Room save(Room entity);

  Room update(String id, Room entity);

  Room findOneById(String id);

  List<Room> findAll();

  List<Room> findAllByIds(List<String> id);

  List<Room> findAllAvailableRooms(Date checkIn, Date checkOut);

  List<Room> findAllByCategory(String id);

  void deleteById(String id);
}
