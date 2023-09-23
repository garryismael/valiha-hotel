package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Payment;

public interface PaymentFactory {
  Payment create(String id, int discount, String state);
}
