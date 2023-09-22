package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.PaymentValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payment implements InputValidator {

  private String id;
  private int discount;
  private String state;

  public boolean discountIsValid() {
    return this.discount >= 0 && this.discount <= 100;
  }

  public boolean stateIsValid() {
    return this.state != null;
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
