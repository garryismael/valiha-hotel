package com.valiha.location.core.interfaces.factory;

import com.valiha.location.core.entities.models.Payment;

public interface PaymentFactory {
  Payment create(String id, int discount, String state);
}
