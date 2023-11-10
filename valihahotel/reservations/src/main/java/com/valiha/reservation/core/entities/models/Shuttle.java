package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.constant.ShuttleValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Shuttle implements InputValidator {

  private String id;
  private String flightName;
  private String flightNumber;
  private String destination;
  private LocalDateTime date;
  private String state;

  public class Builder {

    private final Shuttle shuttle;

    public Builder(Shuttle shuttle) {
      this.shuttle = shuttle;
    }

    public Builder id(String id) {
      this.shuttle.id = id;
      return this;
    }

    public Builder flightName(String flightName) {
      this.shuttle.flightName = flightName;
      return this;
    }

    public Builder flightNumber(String flightNumber) {
      this.shuttle.flightNumber = flightNumber;
      return this;
    }

    public Builder date(LocalDateTime date) {
      this.shuttle.date = date;
      return this;
    }

    public Builder destination(String destination) {
      this.shuttle.destination = destination;
      return this;
    }

    public Builder state(String state) {
      this.shuttle.state = state;
      return this;
    }

    public Shuttle build() {
      return this.shuttle;
    }
  }

  public static Builder builder() {
    Shuttle shuttle = new Shuttle();
    return shuttle.new Builder(shuttle);
  }

  public boolean flightNameIsValid() {
    return flightName != null;
  }

  public boolean flightNumberIsValid() {
    return flightNumber != null;
  }

  public boolean destinationIsValid() {
    return destination != null;
  }

  public boolean dateIsValid() {
    return date != null;
  }

  public boolean stateIsValid() {
    return (
      this.state != null && AppReservation.SHUTTLE_STATES.contains(state)
    );
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!flightNameIsValid()) {
      errors.put(
        ShuttleValidator.KEY_FLIGHT_NAME,
        ShuttleValidator.INVALID_FLIGHT_NAME_ERROR
      );
    }

    if (!flightNumberIsValid()) {
      errors.put(
        ShuttleValidator.KEY_FLIGHT_NUMBER,
        ShuttleValidator.INVALID_FLIGHT_NUMBER_ERROR
      );
    }

    if (!destinationIsValid()) {
      errors.put(
        ShuttleValidator.KEY_DESTINATION,
        ShuttleValidator.INVALID_DESTINATION_ERROR
      );
    }

    if (!dateIsValid()) {
      errors.put(
        ShuttleValidator.KEY_DATE,
        ShuttleValidator.INVALID_DATE_ERROR
      );
    }

    if (!stateIsValid()) {
      errors.put(
        BreakfastValidator.KEY_STATE,
        BreakfastValidator.INVALID_STATE_ERROR
      );
    }
    return errors;
  }
}
