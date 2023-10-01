package com.valiha.reservation.presentation.exception;

import java.time.OffsetDateTime;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ErrorResponse {

  private String traceId;
  private OffsetDateTime timestamp;
  private String message;
  private int status;
  private Map<String, String> errors;

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
