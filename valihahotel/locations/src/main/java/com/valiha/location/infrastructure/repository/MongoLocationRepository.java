package com.valiha.location.infrastructure.repository;

import com.valiha.location.infrastructure.data.LocationDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoLocationRepository
  extends MongoRepository<LocationDataMapper, String> {}
