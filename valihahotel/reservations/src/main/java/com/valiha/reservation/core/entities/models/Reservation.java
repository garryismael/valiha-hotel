package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.ReservationValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Reservation implements InputValidator {

  private String id;
  private Date checkIn;
  private Date checkOut;
  private String state;
  private boolean parking;
  private Room room;
  private Client client;
  private Payment payment;

  public class Builder {

    private final Reservation reservation;

    public Builder(Reservation reservation) {
      this.reservation = reservation;
    }

    public Builder id(String id) {
      reservation.id = id;
      return this;
    }

    public Builder checkIn(Date checkIn) {
      reservation.checkIn = checkIn;
      return this;
    }

    public Builder checkOut(Date checkOut) {
      reservation.checkOut = checkOut;
      return this;
    }

    public Builder state(String state) {
      reservation.state = state;
      return this;
    }

    public Builder parking(boolean parking) {
      reservation.parking = parking;
      return this;
    }

    public Builder room(Room room) {
      reservation.room = room;
      return this;
    }

    public Builder client(Client client) {
      reservation.client = client;
      return this;
    }

    public Builder payment(Payment payment) {
      reservation.payment = payment;
      return this;
    }

    public Reservation build() {
      return this.reservation;
    }
  }

  public static Builder builder() {
    Reservation reservation = new Reservation();
    return reservation.new Builder(reservation);
  }

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
    return this.state != null && AppReservation.STATES.contains(state);
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
    } else {
      errors.putAll(client.validate());
    }

    if (!paymentIsValid()) {
      errors.put(
        ReservationValidator.KEY_PAYMENT,
        ReservationValidator.INVALID_PAYMENT_ERROR
      );
    } else {
      errors.putAll(payment.validate());
    }

    return errors;
  }
}
