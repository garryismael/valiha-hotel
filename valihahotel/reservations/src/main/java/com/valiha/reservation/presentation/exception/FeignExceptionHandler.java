package com.valiha.reservation.presentation.exception;

import feign.FeignException;

public class FeignExceptionHandler extends FeignException {

  private final ErrorResponse errorResponse;

  protected FeignExceptionHandler(ErrorResponse errorResponse) {
    super(errorResponse.getStatus(), errorResponse.getMessage());
    this.errorResponse = errorResponse;
  }

  public ErrorResponse getErrorResponse() {
    return errorResponse;
  }
}
