package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.ReservationDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoReservationRepository
  extends MongoRepository<ReservationDataMapper, String> {}
