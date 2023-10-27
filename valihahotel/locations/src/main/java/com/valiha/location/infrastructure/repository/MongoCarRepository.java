package com.valiha.location.infrastructure.repository;

import com.valiha.location.infrastructure.data.CarDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoCarRepository
  extends MongoRepository<CarDataMapper, String> {}
