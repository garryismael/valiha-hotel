package com.valiha.reservation.application.repository;

import java.util.List;

public interface GenericRepository<T> {
  T save(T entity);

  T update(String id, T entity);

  T findOneById(String id);

  List<T> findAll();

  void deleteById(String id);
}
