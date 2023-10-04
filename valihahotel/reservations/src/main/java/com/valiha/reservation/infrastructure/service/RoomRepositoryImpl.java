package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.CategoryRepository;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoRoomRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RoomRepositoryImpl implements RoomRepository {

  private final MongoRoomRepository roomRepository;
  private final CategoryRepository categoryRepository;
  private final MongoRoomRepository mongoRoomRepository;

  @Override
  public Room save(Room room) {
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

  @Override
  public List<Room> findRoomsByCategoryTypeAndExcludeIdsAndCriteria(
    String categoryType,
    int adult,
    int kid,
    List<String> excludedRoomIds
  ) {
    List<Room> rooms = new ArrayList<>();
    Category categoryDataMapper =
      this.categoryRepository.findOneByTypeAndAdultAndKid(
          categoryType,
          adult,
          kid
        );

    if (categoryDataMapper != null) {
      List<RoomDataMapper> dataMappers =
        this.mongoRoomRepository.findByCategoryAndIdNotIn(
            categoryDataMapper.getId(),
            excludedRoomIds
          );
      rooms = RoomDataMapper.toRoomList(dataMappers);
    }
    return rooms;
  }
}
