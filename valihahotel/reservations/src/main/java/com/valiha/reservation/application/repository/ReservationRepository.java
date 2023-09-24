package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Reservation;
import java.util.List;

public interface ReservationRepository {
  Reservation save(Reservation reservation);

  Reservation update(String id, Reservation reservation);

  Reservation findOneById(String id);

  List<Reservation> findAll();

  void deleteById(String id);
}
