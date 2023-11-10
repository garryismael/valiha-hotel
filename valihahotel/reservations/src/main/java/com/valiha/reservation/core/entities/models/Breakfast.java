package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Breakfast implements InputValidator {

  private String id;
  private Date date;
  private String state;

  public class Builder {

    private final Breakfast breakfast;

    public Builder(Breakfast breakfast) {
      this.breakfast = breakfast;
    }

    public Builder id(String id) {
      this.breakfast.id = id;
      return this;
    }

    public Builder date(Date date) {
      this.breakfast.date = date;
      return this;
    }

    public Builder state(String state) {
      this.breakfast.state = state;
      return this;
    }

    public Breakfast build() {
      return this.breakfast;
    }
  }

  public static Builder builder() {
    Breakfast breakfast = new Breakfast();
    return breakfast.new Builder(breakfast);
  }

  public boolean dateIsValid() {
    return this.date != null;
  }

  public boolean stateIsValid() {
    return (
      this.state != null && AppReservation.BREAKFAST_STATES.contains(state)
    );
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!dateIsValid()) {
      errors.put(
        BreakfastValidator.KEY_DATE,
        BreakfastValidator.INVALID_DATE_ERROR
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
