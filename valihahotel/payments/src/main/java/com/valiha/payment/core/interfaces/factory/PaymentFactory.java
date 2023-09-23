package com.valiha.payment.core.interfaces.factory;

import com.valiha.payment.core.entities.models.Payment;

public interface PaymentFactory {
  Payment create(String id, int discount, String state);
}
