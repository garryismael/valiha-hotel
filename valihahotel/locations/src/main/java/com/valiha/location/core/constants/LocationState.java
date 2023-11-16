package com.valiha.location.core.constants;

import java.util.Arrays;
import java.util.List;

public enum LocationState {
  PENDING("pending"),
  CONFIRMED("confirmed"),
  DONE("done"),
  IN_PROGRESS("in_progress"),
  CANCELED("canceled"),
  NO_SHOW("no_show");

  private final String state;

  private LocationState(String state) {
    this.state = state;
  }

  public String value() {
    return this.state;
  }

  public String getValue() {
    return state;
  }

  public static List<String> getStates() {
    return Arrays
      .stream(LocationState.values())
      .map(LocationState::getValue)
      .toList();
  }

  public static boolean contains(String state) {
    return LocationState.getStates().contains(state);
  }
}
