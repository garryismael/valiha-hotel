package com.valiha.payment.presentation.exception;

public class ApiErrorException extends RuntimeException {

  private ErrorResponse errorResponse;

  public ApiErrorException(String message, ErrorResponse errorResponse) {
    super(message);
    this.errorResponse = errorResponse;
  }

  public ErrorResponse getErrorResponse() {
    return errorResponse;
  }
}
