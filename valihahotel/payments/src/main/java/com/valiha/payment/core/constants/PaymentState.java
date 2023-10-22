package com.valiha.payment.core.constants;

public enum PaymentState {
  PENDING("pending"),
  PAID("paid"),
  FAILED("failed"),
  REFUNDED("refunded");

  private final String state;

  private PaymentState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
