package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoRoomRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@AllArgsConstructor
public class RoomRepositoryImpl implements RoomRepository {

  private final MongoRoomRepository roomRepository;
  private final MongoTemplate mongoTemplate;

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
    Criteria criteria = Criteria
      .where("category.type")
      .is(categoryType)
      .and("_id")
      .nin(excludedRoomIds)
      .and("category.adult")
      .gte(adult)
      .and("category.kid")
      .gte(kid);
    Query query = new Query(criteria);
    List<RoomDataMapper> dataMappers = mongoTemplate.find(
      query,
      RoomDataMapper.class
    );
    return RoomDataMapper.toRoomList(dataMappers);
  }
}
