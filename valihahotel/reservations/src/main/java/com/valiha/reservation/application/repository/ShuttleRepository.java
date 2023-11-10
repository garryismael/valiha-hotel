package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Shuttle;

public interface ShuttleRepository {
  Shuttle create(Shuttle requestDto);
  Shuttle edit(String id, Shuttle requestDto);
  Shuttle findById(String id);
  void delete(String id);
}
