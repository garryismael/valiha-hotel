package com.valiha.payment.core.entities.constants;

import java.util.Arrays;
import java.util.List;

public enum PaymentTypeState {
  CASH("cash"),
  MVOLA("m_vola"),
  ORANGE_MONEY("orange_money"),
  AIRTEL_MONEY("airtel_money"),
  CREDIT_CARD("credit_card");

  private final String value;

  PaymentTypeState(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public static List<String> getStates() {
    return Arrays
      .stream(PaymentTypeState.values())
      .map(PaymentTypeState::getValue)
      .toList();
  }

  public static boolean contains(String state) {
    return PaymentTypeState.getStates().contains(state);
  }
}
