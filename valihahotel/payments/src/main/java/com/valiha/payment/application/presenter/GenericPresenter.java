package com.valiha.payment.application.presenter;

import java.util.List;
import java.util.Map;

public interface GenericPresenter<T> {
  T prepareSuccessView(T response);

  List<T> prepareSuccessView(List<T> responses);

  T prepareInvalidDataView(String message, Map<String, String> errors);

  T prepareResourceNotFoundView(String message, Map<String, String> errors);
}
