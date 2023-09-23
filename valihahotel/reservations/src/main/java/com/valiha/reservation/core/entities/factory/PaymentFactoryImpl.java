package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.interfaces.factory.PaymentFactory;

public class PaymentFactoryImpl implements PaymentFactory {

  @Override
  public Payment create(String id, int discount, String state) {
    return Payment.builder().id(id).discount(discount).state(state).build();
  }
}
