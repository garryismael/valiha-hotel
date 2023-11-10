package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Breakfast;

public interface BreakfastRepository {
  Breakfast create(Breakfast breakfast);
  Breakfast edit(String id, Breakfast requestDto);
  Breakfast findById(String id);
  void delete(String id);
}
