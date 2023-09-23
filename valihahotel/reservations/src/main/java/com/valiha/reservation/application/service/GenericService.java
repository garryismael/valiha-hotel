package com.valiha.reservation.application.service;

import java.util.List;

public interface GenericService<R, T> {
  R create(T request);
  R findByIds(List<String> ids);
}
