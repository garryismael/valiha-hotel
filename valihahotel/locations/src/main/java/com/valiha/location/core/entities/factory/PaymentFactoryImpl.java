package com.valiha.location.core.entities.factory;

import com.valiha.location.core.entities.models.Payment;
import com.valiha.location.core.interfaces.factory.PaymentFactory;

public class PaymentFactoryImpl implements PaymentFactory {

  @Override
  public Payment create(String id, int discount, String state) {
    return Payment.builder().id(id).discount(discount).state(state).build();
  }
}
