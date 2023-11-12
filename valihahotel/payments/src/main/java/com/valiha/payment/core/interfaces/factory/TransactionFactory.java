package com.valiha.payment.core.interfaces.factory;

import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.entities.models.User;
import java.time.LocalDateTime;

public interface TransactionFactory {
  Transaction create(
    String id,
    LocalDateTime date,
    int amount,
    String paymentType,
    User user
  );
}
