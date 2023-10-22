package com.valiha.payment.core.constants;

import java.util.List;

public class AppPayment {

  public static final String DATE_FORMAT = "dd/MM/yyyy";

  public static final List<String> PAYMENT_STATES = List.of(
    PaymentState.PENDING.value(),
    PaymentState.PAID.value(),
    PaymentState.FAILED.value(),
    PaymentState.REFUNDED.value()
  );
}
