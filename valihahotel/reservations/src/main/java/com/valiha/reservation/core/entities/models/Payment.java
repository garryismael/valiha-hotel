package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.PaymentValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Payment implements InputValidator {

  private String id;
  private int discount;
  private String state;

  public class Builder {

    private final Payment payment;

    public Builder(Payment payment) {
      this.payment = payment;
    }

    public Builder id(String id) {
      this.payment.id = id;
      return this;
    }

    public Builder discount(int value) {
      this.payment.discount = value;
      return this;
    }

    public Builder state(String value) {
      this.payment.state = value;
      return this;
    }

    public Payment build() {
      return this.payment;
    }
  }

  public static Builder builder() {
    Payment payment = new Payment();
    return payment.new Builder(payment);
  }

  public boolean discountIsValid() {
    return this.discount >= 0 && this.discount <= 100;
  }

  public boolean stateIsValid() {
    return this.state != null && AppReservation.PAYMENT_STATES.contains(state);
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!discountIsValid()) {
      errors.put(
        PaymentValidator.KEY_DISCOUNT,
        PaymentValidator.INVALID_DISCOUNT_ERROR
      );
    }

    if (!stateIsValid()) {
      errors.put(
        PaymentValidator.KEY_STATE,
        PaymentValidator.INVALID_STATE_ERROR
      );
    }

    return errors;
  }
}
