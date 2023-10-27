package com.valiha.payment.infrastructure.repository;

import com.valiha.payment.infrastructure.data.PaymentDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoPaymentRepository
  extends MongoRepository<PaymentDataMapper, String> {}
