package com.valiha.reservation.application.presenter;

import java.util.List;
import java.util.Map;

public interface GenericPresenter<T> {
  T prepareSuccessView(T response);

  List<T> prepareSuccessView(List<T> responses);

  T prepareInvalidEntityView(String message, Map<String, String> errors);

  T prepareInvalidDataView(String message, Map<String, String> errors);

  T prepareResourceNotFoundView(String message, Map<String, String> errors);
}
