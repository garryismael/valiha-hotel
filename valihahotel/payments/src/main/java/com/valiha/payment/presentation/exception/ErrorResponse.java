package com.valiha.payment.presentation.exception;

import java.time.OffsetDateTime;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorResponse {

  private String traceId;
  private OffsetDateTime timestamp;
  private String message;
  private int status;
  private Map<String, String> errors;
}
