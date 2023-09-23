package com.valiha.payment.application.repository;

import com.valiha.payment.core.entities.models.Payment;
import java.util.List;

public interface PaymentRepository {
  Payment create(Payment entity);

  Payment update(String id, Payment entity);

  Payment findOneById(String id);

  List<Payment> findAll();

  List<Payment> findAllByIds(List<String> ids);
}
