package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reservation implements InputValidator {

  private String id;
  private Date checkIn;
  private Date checkOut;
  private String state;
  private boolean useParking;
  private Room room;
  private Client client;
  private Payment payment;

  public boolean checkInIsValid() {
    return (
      this.checkIn != null &&
      this.checkOut != null &&
      this.checkIn.before(checkOut)
    );
  }

  public boolean checkOutIsValid() {
    return (
      this.checkIn != null &&
      this.checkOut != null &&
      this.checkOut.after(checkIn)
    );
  }

  public boolean stateIsValid() {
    return this.state != null;
  }

  public boolean roomIsValid() {
    return this.room != null;
  }

  public boolean clientIsValid() {
    return this.client != null;
  }

  public boolean paymentIsValid() {
    return this.payment != null;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!checkInIsValid()) {
      errors.put(
        ReservationValidator.KEY_CHECK_IN,
        ReservationValidator.INVALID_CHECK_IN_ERROR
      );
    }

    if (!checkOutIsValid()) {
      errors.put(
        ReservationValidator.KEY_CHECK_OUT,
        ReservationValidator.INVALID_CHECK_OUT_ERROR
      );
    }

    if (!stateIsValid()) {
      errors.put(
        ReservationValidator.KEY_STATE,
        ReservationValidator.INVALID_STATE_ERROR
      );
    }

    if (!roomIsValid()) {
      errors.put(
        ReservationValidator.KEY_ROOM,
        ReservationValidator.INVALID_ROOM_ERROR
      );
    }

    if (!clientIsValid()) {
      errors.put(
        ReservationValidator.KEY_CLIENT,
        ReservationValidator.INVALID_CLIENT_ERROR
      );
    }

    if (!paymentIsValid()) {
      errors.put(
        ReservationValidator.KEY_PAYMENT,
        ReservationValidator.INVALID_PAYMENT_ERROR
      );
    }

    return errors;
  }
}
