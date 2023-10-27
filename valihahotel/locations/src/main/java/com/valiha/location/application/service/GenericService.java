package com.valiha.location.application.service;

import java.util.List;

public interface GenericService<R, T> {
  R create(T requestDto);

  R findOneById(String id);
  
  List<R> findAllByIds(List<String> ids);
}
