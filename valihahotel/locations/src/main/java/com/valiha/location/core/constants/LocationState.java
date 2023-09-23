package com.valiha.location.core.constants;

public enum LocationState {
  CONFIRMED("confirmed"),
  PENDING("pending"),
  CANCELED("canceled"),
  NO_SHOW("no_show");

  private final String state;

  private LocationState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }
}
