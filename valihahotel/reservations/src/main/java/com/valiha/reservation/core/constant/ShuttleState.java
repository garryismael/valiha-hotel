package com.valiha.reservation.core.constant;

public enum ShuttleState {
  PENDING("pending"),
  PROGRESS("in-progress"),
  DONE("completed"),
  FAILED("failed"),
  CANCELED("canceled");

  private final String state;

  private ShuttleState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
