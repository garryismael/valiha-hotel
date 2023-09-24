package com.valiha.location.presentation.exception;

import java.time.OffsetDateTime;
import java.util.Map;

public class ErrorResponse {

  private String traceId;
  private OffsetDateTime timestamp;
  private int status;
  private Map<String, String> errors;
  private String message;

  public ErrorResponse(
    String message,
    String traceId,
    OffsetDateTime timestamp,
    int status,
    Map<String, String> errors
  ) {
    this.message = message;
    this.traceId = traceId;
    this.timestamp = timestamp;
    this.status = status;
    this.errors = errors;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getTraceId() {
    return traceId;
  }

  public void setTraceId(String traceId) {
    this.traceId = traceId;
  }

  public OffsetDateTime getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(OffsetDateTime timestamp) {
    this.timestamp = timestamp;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  public Map<String, String> getErrors() {
    return errors;
  }

  public void setErrors(Map<String, String> errors) {
    this.errors = errors;
  }
}
