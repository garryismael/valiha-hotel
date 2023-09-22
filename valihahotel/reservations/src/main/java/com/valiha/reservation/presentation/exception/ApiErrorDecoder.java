package com.valiha.reservation.presentation.exception;

import feign.Response;
import feign.codec.ErrorDecoder;
import java.time.OffsetDateTime;
import java.util.UUID;

public class ApiErrorDecoder implements ErrorDecoder {

  @Override
  public Exception decode(String methodKey, Response response) {
    int status = 400;
    switch (response.status()) {
      case 400:
        status = 400;
      case 404:
        status = 404;
      default:
        status = 500;
    }

    ErrorResponse errorResponse = new ErrorResponse(
      "Invalid Request",
      UUID.randomUUID().toString(),
      OffsetDateTime.now(),
      status,
      null
    );
    throw new ApiErrorException("Cannot perform request", errorResponse);
  }
}
