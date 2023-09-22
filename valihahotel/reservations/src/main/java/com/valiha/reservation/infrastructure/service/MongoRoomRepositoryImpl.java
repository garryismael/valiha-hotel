package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoRoomRepository;
import java.util.List;
import java.util.Optional;

public class MongoRoomRepositoryImpl implements GenericRepository<Room> {

  private final MongoRoomRepository roomRepository;

  public MongoRoomRepositoryImpl(MongoRoomRepository roomRepository) {
    this.roomRepository = roomRepository;
  }

  @Override
  public Room create(Room room) {
    RoomDataMapper dataMapper =
      this.roomRepository.save(RoomDataMapper.from(room));
    return RoomDataMapper.toRoom(dataMapper);
  }

  @Override
  public List<Room> findAll() {
    List<RoomDataMapper> roomDataMappers = this.roomRepository.findAll();
    return RoomDataMapper.toRoomList(roomDataMappers);
  }

  @Override
  public Room findOneById(String id) {
    Optional<RoomDataMapper> optionalRoom = this.roomRepository.findById(id);
    Room room = null;
    if (optionalRoom.isPresent()) {
      room = RoomDataMapper.toRoom(optionalRoom.get());
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
    return RoomDataMapper.toRoom(dataMapper);
  }
}
