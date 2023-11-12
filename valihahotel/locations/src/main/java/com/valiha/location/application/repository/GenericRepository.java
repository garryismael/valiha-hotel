package com.valiha.location.application.repository;

import java.util.List;

public interface GenericRepository<T> {
  T save(T entity);

  T update(String id, T entity);

  T findOneById(String id);

  List<T> findAllByIds(List<String> ids);

  List<T> findAll();

  void deleteById(String id);
}
