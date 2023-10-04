package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoRoomRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.core.query.Criteria;

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
    // Create a match operation to filter by category type
    MatchOperation matchOperation = Aggregation.match(
      Criteria
        .where("category.type")
        .is(categoryType)
        .and("_id")
        .nin(excludedRoomIds)
        .and("category.adult")
        .gte(adult)
        .and("category.kid")
        .gte(kid)
    );

    // Define the aggregation
    Aggregation aggregation = Aggregation.newAggregation(matchOperation);

    // Execute the aggregation
    AggregationResults<RoomDataMapper> aggregationResults = mongoTemplate.aggregate(
      aggregation,
      "rooms",
      RoomDataMapper.class
    );

    return RoomDataMapper.toRoomList(aggregationResults.getMappedResults());
  }
}
