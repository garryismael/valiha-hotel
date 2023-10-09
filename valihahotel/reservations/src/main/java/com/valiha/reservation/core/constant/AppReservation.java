package com.valiha.reservation.core.constant;

import java.util.List;

public class AppReservation {

  public static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";
  public static final String DATE_FORMAT = "dd/MM/yyyy";
  public static final String DATE_TIME_FORMAT = "dd/MM/yyyy HH:mm";
  public static final List<String> STATES = List.of(
    ReservationState.PENDING.value(),
    ReservationState.CONFIRMED.value(),
    ReservationState.CANCELED.value(),
    ReservationState.NO_SHOW.value(),
    ReservationState.PAID.value()
  );

  public static final List<String> PAYMENT_STATES = List.of(
    PaymentState.PENDING.value(),
    PaymentState.PAID.value(),
    PaymentState.FAILED.value(),
    PaymentState.CANCELED.value(),
    PaymentState.EXPIRED.value(),
    PaymentState.REFUNDED.value()
  );
}
