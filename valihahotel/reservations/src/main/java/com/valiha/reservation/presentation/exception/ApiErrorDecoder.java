package com.valiha.reservation.presentation.exception;

import com.fasterxml.jackson.databind.ObjectMapper;
import feign.Response;
import feign.codec.ErrorDecoder;
import java.time.OffsetDateTime;
import java.util.UUID;

public class ApiErrorDecoder implements ErrorDecoder {

  private final ObjectMapper objectMapper;

  public ApiErrorDecoder(ObjectMapper objectMapper) {
    this.objectMapper = objectMapper;
  }

  @Override
  public Exception decode(String methodKey, Response response) {
    ErrorResponse errorResponse;
    try {
      errorResponse =
        objectMapper.readValue(
          response.body().asInputStream(),
          ErrorResponse.class
        );
    } catch (Exception e) {
      errorResponse =
        new ErrorResponse(
          UUID.randomUUID().toString(),
          OffsetDateTime.now(),
          "Invalid Request",
          response.status(),
          null
        );
    }

    throw new ApiErrorException(errorResponse.getMessage(), errorResponse);
  }
}
