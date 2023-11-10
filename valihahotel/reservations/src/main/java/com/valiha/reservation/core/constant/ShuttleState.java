package com.valiha.reservation.core.constant;

public enum ShuttleState {
  PENDING("pending"),
  PAID("in-progress"),
  FAILED("completed"),
  CANCELED("failed"),
  REFUNDED("canceled");

  private final String state;

  private ShuttleState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
