package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.ShuttleDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoShuttleRepository
  extends MongoRepository<ShuttleDataMapper, String> {}
