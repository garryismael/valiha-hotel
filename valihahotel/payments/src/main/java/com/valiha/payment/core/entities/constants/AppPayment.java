package com.valiha.payment.core.entities.constants;

import java.util.List;

public class AppPayment {

  public static final String DATE_TIME_FORMAT = "dd/MM/yyyy HH:mm";

  public static final List<String> PAYMENT_STATES = List.of(
    PaymentState.PENDING.value(),
    PaymentState.PAID.value(),
    PaymentState.FAILED.value(),
    PaymentState.REFUNDED.value()
  );
}
