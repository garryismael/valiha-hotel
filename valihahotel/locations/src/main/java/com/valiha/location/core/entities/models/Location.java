package com.valiha.location.core.entities.models;

import com.valiha.location.core.constants.LocationValidator;
import com.valiha.location.core.interfaces.models.ILocation;
import com.valiha.location.core.interfaces.validator.InputValidator;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Location implements ILocation, InputValidator {

  private String id;
  private String state;
  private Date start;
  private Date end;
  private String destination;
  private String reason;
  private Client client;
  private Car car;
  private Payment payment;

  @Override
  public boolean stateIsValid() {
    return this.state != null && this.state.length() > 2;
  }

  @Override
  public boolean startIsValid() {
    return this.start != null;
  }

  @Override
  public boolean endIsValid() {
    return this.end != null;
  }

  @Override
  public boolean destinationIsValid() {
    return this.destination != null && this.destination.length() > 2;
  }

  @Override
  public boolean reasonIsValid() {
    return this.reason != null && this.reason.length() >= 10;
  }

  @Override
  public boolean clientIsValid() {
    return this.client != null;
  }

  @Override
  public boolean carIsValid() {
    return this.car != null;
  }

  @Override
  public boolean paymentIsValid() {
    return this.payment != null;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();
    if (!stateIsValid()) {
      errors.put(
        LocationValidator.KEY_STATE,
        LocationValidator.INVALID_START_ERROR
      );
    }

    if (!startIsValid()) {
      errors.put(
        LocationValidator.KEY_START,
        LocationValidator.INVALID_START_ERROR
      );
    }

    if (!endIsValid()) {
      errors.put(
        LocationValidator.KEY_END,
        LocationValidator.INVALID_END_ERROR
      );
    }

    if (!destinationIsValid()) {
      errors.put(
        LocationValidator.KEY_DESTINATION,
        LocationValidator.INVALID_DESTINATION_ERROR
      );
    }

    if (!reasonIsValid()) {
      errors.put(
        LocationValidator.KEY_REASON,
        LocationValidator.INVALID_REASON_ERROR
      );
    }

    if (!clientIsValid()) {
      errors.put(
        LocationValidator.KEY_CLIENT,
        LocationValidator.INVALID_CLIENT_ERROR
      );
    }

    if (!carIsValid()) {
      errors.put(
        LocationValidator.KEY_CAR,
        LocationValidator.INVALID_CAR_ERROR
      );
    }

    if (!paymentIsValid()) {
      errors.put(
        LocationValidator.KEY_PAYMENT,
        LocationValidator.INVALID_PAYMENT_ERROR
      );
    }
    return errors;
  }
}
