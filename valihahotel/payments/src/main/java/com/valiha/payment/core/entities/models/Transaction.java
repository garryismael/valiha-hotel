package com.valiha.payment.core.entities.models;

import com.valiha.payment.core.entities.constants.PaymentTypeName;
import com.valiha.payment.core.entities.constants.TransactionValidator;
import com.valiha.payment.core.interfaces.models.ITransaction;
import com.valiha.payment.core.interfaces.validator.InputValidator;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Transaction implements ITransaction, InputValidator {

  private String id;
  private LocalDateTime date;
  private int amount;
  private String paymentType;
  private User user;
  private Payment payment;

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder {

    private final Transaction transaction;

    private Builder() {
      this.transaction = new Transaction();
    }

    public Builder id(String id) {
      this.transaction.id = id;
      return this;
    }

    public Builder date(LocalDateTime date) {
      this.transaction.date = date;
      return this;
    }

    public Builder amount(int amount) {
      this.transaction.amount = amount;
      return this;
    }

    public Builder paymentType(String paymentType) {
      this.transaction.paymentType = paymentType;
      return this;
    }

    public Builder user(User user) {
      this.transaction.user = user;
      return this;
    }

    public Builder payment(Payment payment) {
      this.transaction.payment = payment;
      return this;
    }

    public Transaction build() {
      return this.transaction;
    }
  }

  @Override
  public boolean isValidAmount() {
    return this.amount > 0;
  }

  @Override
  public boolean isValidPaymentType() {
    return this.paymentType != null && PaymentTypeName.contains(paymentType);
  }

  @Override
  public boolean isValidUser() {
    return this.user != null;
  }

  @Override
  public boolean isPaymentValid() {
    return this.payment != null;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();
    if (!isValidAmount()) {
      errors.put(
        TransactionValidator.KEY_AMOUNT,
        TransactionValidator.INVALID_AMOUNT_ERROR
      );
    }

    if (!isValidPaymentType()) {
      errors.put(
        TransactionValidator.KEY_PAYMENT_TYPE,
        TransactionValidator.INVALID_PAYMENT_TYPE_ERROR
      );
    }

    if (!isValidUser()) {
      errors.put(
        TransactionValidator.KEY_USER,
        TransactionValidator.INVALID_USER_ERROR
      );
    }

    if (!isPaymentValid()) {
      errors.put(
        TransactionValidator.KEY_PAYMENT,
        TransactionValidator.INVALID_PAYMENT_ERROR
      );
    }
    return errors;
  }
}
