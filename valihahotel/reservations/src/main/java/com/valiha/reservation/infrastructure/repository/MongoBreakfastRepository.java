package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.BreakfastDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoBreakfastRepository
  extends MongoRepository<BreakfastDataMapper, String> {}
