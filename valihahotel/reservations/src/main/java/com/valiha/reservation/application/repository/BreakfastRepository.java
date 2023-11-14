package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Breakfast;
import java.util.List;

public interface BreakfastRepository {
  Breakfast create(Breakfast breakfast);
  List<Breakfast> create(List<Breakfast> breakfasts);
  Breakfast edit(String id, Breakfast requestDto);
  Breakfast findById(String id);
  void delete(String id);
}
