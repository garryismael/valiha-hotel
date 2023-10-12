package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.ReservationRepository;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoRoomRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RoomRepositoryImpl implements RoomRepository {

  private final ReservationRepository reservationRepository;
  private final MongoRoomRepository roomRepository;
  private final MongoRoomRepository mongoRoomRepository;

  @Override
  public Room save(Room room) {
    RoomDataMapper dataMapper =
      this.roomRepository.save(RoomDataMapper.from(room));
    return RoomDataMapper.cast(dataMapper);
  }

  @Override
  public List<Room> findAll() {
    List<RoomDataMapper> roomDataMappers = this.roomRepository.findAll();
    return RoomDataMapper.cast(roomDataMappers);
  }

  @Override
  public Room findOneById(String id) {
    Optional<RoomDataMapper> optionalRoom = this.roomRepository.findById(id);
    Room room = null;
    if (optionalRoom.isPresent()) {
      room = RoomDataMapper.cast(optionalRoom.get());
    }
    return room;
  }

  @Override
  public void deleteById(String id) {
    this.roomRepository.deleteById(id);
  }

  @Override
  public Room update(String id, Room entity) {
    RoomDataMapper dataMapper =
      this.roomRepository.save(RoomDataMapper.from(entity));
    return RoomDataMapper.cast(dataMapper);
  }

  @Override
  public List<Room> findAllAvailableRooms(Date checkIn, Date checkOut) {
    List<Room> rooms = new ArrayList<>();

    List<Reservation> reservations =
      this.reservationRepository.findAllWithinDateRange(checkIn, checkOut);

    HashSet<String> ids = new HashSet<String>();

    for (Reservation reservation : reservations) {
      ids.addAll(
        reservation.getRooms().stream().map(room -> room.getId()).toList()
      );
    }

    List<RoomDataMapper> dataMappers =
      this.mongoRoomRepository.findByIdNotIn(ids.stream().toList());
    rooms = RoomDataMapper.cast(dataMappers);

    return rooms;
  }

  @Override
  public List<Room> findAllByCategory(String id) {
    List<RoomDataMapper> roomDataMappers =
      this.roomRepository.findByCategory(id);
    return RoomDataMapper.cast(roomDataMappers);
  }

  @Override
  public List<Room> findAllByIds(List<String> ids) {
    if (ids.isEmpty()) {
      return new ArrayList<>();
    }
    List<RoomDataMapper> dataMappers = this.roomRepository.findAllById(ids);
    return RoomDataMapper.cast(dataMappers);
  }
}
