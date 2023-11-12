package com.valiha.payment.core.interfaces.models;

import java.time.LocalDateTime;

public interface ITransaction {
  String getId();
  int getAmount();
  LocalDateTime getDate();
  String getPaymentType();

  boolean isValidAmount();
  boolean isValidPaymentType();
  boolean isValidUser();
  boolean isPaymentValid();
}
