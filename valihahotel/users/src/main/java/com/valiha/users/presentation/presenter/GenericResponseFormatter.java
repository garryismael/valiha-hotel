package com.valiha.users.presentation.presenter;

import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.presentation.exception.ApiErrorException;
import com.valiha.users.presentation.exception.ErrorResponse;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.http.HttpStatus;

public class GenericResponseFormatter<T> implements GenericPresenter<T> {

  @Override
  public T prepareSuccessView(T response) {
    return response;
  }

  @Override
  public List<T> prepareSuccessView(List<T> responses) {
    return responses;
  }

  @Override
  public T prepareInvalidDataView(String message, Map<String, String> errors) {
    ErrorResponse errorResponse = new ErrorResponse(
      message,
      OffsetDateTime.now(),
      UUID.randomUUID().toString(),
      HttpStatus.BAD_REQUEST.value(),
      errors
    );
    throw new ApiErrorException(message, errorResponse);
  }

  @Override
  public T prepareResourceNotFoundView(
    String message,
    Map<String, String> errors
  ) {
    ErrorResponse errorResponse = new ErrorResponse(
      message,
      OffsetDateTime.now(),
      UUID.randomUUID().toString(),
      HttpStatus.NOT_FOUND.value(),
      errors
    );
    throw new ApiErrorException(message, errorResponse);
  }
}
