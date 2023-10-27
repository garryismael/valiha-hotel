package com.valiha.reservation.application.repository;

import com.valiha.reservation.core.entities.models.Category;
import java.util.List;

public interface CategoryRepository {
  Category save(Category entity);

  Category update(String id, Category entity);

  Category findOneByType(String type);

  Category findOneById(String id);

  List<Category> findAll();

  void deleteById(String id);
}
