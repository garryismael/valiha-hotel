package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.RoomDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoRoomRepository
  extends MongoRepository<RoomDataMapper, String> {}
