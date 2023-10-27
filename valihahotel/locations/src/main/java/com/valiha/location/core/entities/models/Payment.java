package com.valiha.location.core.entities.models;

import com.valiha.location.core.constants.PaymentValidator;
import com.valiha.location.core.interfaces.models.IPayment;
import com.valiha.location.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Payment implements IPayment, InputValidator {

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

  @Override
  public boolean discountIsValid() {
    return discount >= 0 && discount <= 100;
  }

  @Override
  public boolean stateIsValid() {
    return this.state != null && state.length() > 2;
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
