package com.valiha.payment.application.repository;

import com.valiha.payment.core.entities.models.Transaction;
import java.util.List;

public interface TransactionRepository {
  Transaction create(Transaction entity);

  Transaction update(String id, Transaction entity);

  Transaction findOneById(String id);

  List<Transaction> findAll();
}
