package com.valiha.reservation.core.constant;

public enum ReservationState {
  CONFIRMED("confirmed"),
  PENDING("pending"),
  CANCELED("canceled"),
  NO_SHOW("no_show");

  private final String state;

  private ReservationState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
