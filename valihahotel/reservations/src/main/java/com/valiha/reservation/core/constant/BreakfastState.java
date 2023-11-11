package com.valiha.reservation.core.constant;

public enum BreakfastState {
  PENDING("pending"),
  COMPLETED("completed"),
  CANCELED("canceled");

  private final String state;

  private BreakfastState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
