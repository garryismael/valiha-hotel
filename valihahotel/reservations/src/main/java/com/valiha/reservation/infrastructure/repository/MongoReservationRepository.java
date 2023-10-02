package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.ReservationDataMapper;
import java.util.Date;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MongoReservationRepository
  extends MongoRepository<ReservationDataMapper, String> {
  @Query("{ 'checkIn': { $lte: ?1 }, 'checkOut': { $gte: ?0 }}")
  List<ReservationDataMapper> findOverlappingReservations(
    Date checkOut,
    Date checkIn
  );
}
