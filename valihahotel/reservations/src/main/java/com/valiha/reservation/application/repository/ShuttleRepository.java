package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Shuttle;
import java.util.List;

public interface ShuttleRepository {
  Shuttle create(Shuttle requestDto);
  List<Shuttle> create(List<Shuttle> shuttles);
  Shuttle edit(String id, Shuttle requestDto);
  Shuttle findById(String id);
  void delete(String id);
}
