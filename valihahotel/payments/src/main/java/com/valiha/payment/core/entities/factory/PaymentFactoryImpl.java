package com.valiha.payment.core.entities.factory;

import com.valiha.payment.core.entities.models.Payment;
import com.valiha.payment.core.interfaces.factory.PaymentFactory;

public class PaymentFactoryImpl implements PaymentFactory {

  @Override
  public Payment create(String id, int discount, String state) {
    return Payment.builder().id(id).discount(discount).state(state).build();
  }
}
