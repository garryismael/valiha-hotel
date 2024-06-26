package com.valiha.location.core.constants;

public enum PaymentState {
  PENDING("pending"),
  PAID("paid"),
  FAILED("failed"),
  CANCELED("canceled"),
  REFUNDED("refunded"),
  EXPIRED("expired");

  private final String state;

  private PaymentState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
