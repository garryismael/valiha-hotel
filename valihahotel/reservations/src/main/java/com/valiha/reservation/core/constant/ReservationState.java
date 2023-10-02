package com.valiha.reservation.core.constant;

import java.util.List;

public enum ReservationState {
  PENDING("pending"),
  CONFIRMED("confirmed"),
  PAID("paid"),
  CANCELED("canceled"),
  NO_SHOW("no_show");

  private final String state;

  private ReservationState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }

  public static List<String> getAvailableState() {
    return List.of(PENDING.value(), CONFIRMED.value());
  }
}
