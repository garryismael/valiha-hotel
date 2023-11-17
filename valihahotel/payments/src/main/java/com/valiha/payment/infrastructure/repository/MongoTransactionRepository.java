package com.valiha.payment.infrastructure.repository;

import com.valiha.payment.infrastructure.data.TransactionDataMapper;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoTransactionRepository
  extends MongoRepository<TransactionDataMapper, String> {
  Optional<TransactionDataMapper> findByPaymentId(String paymentId);
}
