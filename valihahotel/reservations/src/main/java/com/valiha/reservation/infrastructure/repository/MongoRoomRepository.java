package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoRoomRepository
  extends MongoRepository<RoomDataMapper, String> {
  List<RoomDataMapper> findByIdNotIn(List<String> ids);

  List<RoomDataMapper> findByCategory(String id);
}
