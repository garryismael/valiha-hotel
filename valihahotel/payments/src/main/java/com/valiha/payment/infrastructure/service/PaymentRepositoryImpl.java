package com.valiha.payment.infrastructure.service;

import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.core.entities.models.Payment;
import com.valiha.payment.infrastructure.data.PaymentDataMapper;
import com.valiha.payment.infrastructure.repository.MongoPaymentRepository;
import java.util.List;
import java.util.Optional;

public class PaymentRepositoryImpl implements PaymentRepository {

  MongoPaymentRepository paymentRepository;

  @Override
  public Payment create(Payment payment) {
    PaymentDataMapper dataMapper = PaymentDataMapper.from(payment);
    dataMapper = this.paymentRepository.save(dataMapper);
    return toPayment(dataMapper);
  }

  @Override
  public Payment update(String id, Payment payment) {
    PaymentDataMapper dataMapper = PaymentDataMapper.from(payment);
    dataMapper = this.paymentRepository.save(dataMapper);
    return toPayment(dataMapper);
  }

  @Override
  public Payment findOneById(String id) {
    Optional<PaymentDataMapper> optionalDataMapper =
      this.paymentRepository.findById(id);
    if (optionalDataMapper.isPresent()) {
      return toPayment(optionalDataMapper.get());
    }
    return null;
  }

  @Override
  public List<Payment> findAll() {
    List<PaymentDataMapper> dataMappers = this.paymentRepository.findAll();
    return dataMappers.stream().map(PaymentRepositoryImpl::toPayment).toList();
  }

  @Override
  public List<Payment> findAllByIds(List<String> ids) {
    List<PaymentDataMapper> dataMappers =
      this.paymentRepository.findAllById(ids);
    return dataMappers.stream().map(PaymentRepositoryImpl::toPayment).toList();
  }

  public static Payment toPayment(PaymentDataMapper dataMapper) {
    return Payment
      .builder()
      .id(dataMapper.getId())
      .discount(dataMapper.getDiscount())
      .state(dataMapper.getState())
      .build();
  }
}
