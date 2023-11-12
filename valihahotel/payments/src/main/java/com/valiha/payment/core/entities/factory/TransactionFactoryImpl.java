package com.valiha.payment.core.entities.factory;

import com.valiha.payment.core.entities.models.Payment;
import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.core.interfaces.factory.TransactionFactory;
import java.time.LocalDateTime;

public class TransactionFactoryImpl implements TransactionFactory {

  @Override
  public Transaction create(
    String id,
    LocalDateTime date,
    int amount,
    String paymentType,
    User user,
    Payment payment
  ) {
    return Transaction
      .builder()
      .id(id)
      .date(date)
      .amount(amount)
      .paymentType(paymentType)
      .user(user)
      .payment(payment)
      .build();
  }
}
