package com.valiha.payment.core.entities.constants;

import java.util.Arrays;
import java.util.List;

public enum PaymentTypeName {
  CASH("cash"),
  MVOLA("m_vola"),
  ORANGE_MONEY("orange_money"),
  AIRTEL_MONEY("airtel_money"),
  CREDIT_CARD("credit_card");

  private final String value;

  PaymentTypeName(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public static List<String> getStates() {
    return Arrays
      .stream(PaymentTypeName.values())
      .map(PaymentTypeName::getValue)
      .toList();
  }

  public static boolean contains(String state) {
    return PaymentTypeName.getStates().contains(state);
  }
}
