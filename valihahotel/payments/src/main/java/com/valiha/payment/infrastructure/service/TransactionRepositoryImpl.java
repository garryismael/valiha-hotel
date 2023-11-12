package com.valiha.payment.infrastructure.service;

import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.interfaces.factory.TransactionFactory;
import com.valiha.payment.infrastructure.data.PaymentDataMapper;
import com.valiha.payment.infrastructure.data.TransactionDataMapper;
import com.valiha.payment.infrastructure.data.UserDataMapper;
import com.valiha.payment.infrastructure.repository.MongoTransactionRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class TransactionRepositoryImpl implements TransactionRepository {

  private final MongoTransactionRepository transactionRepository;
  private final TransactionFactory transactionFactory;

  @Override
  public Transaction create(Transaction entity) {
    TransactionDataMapper dataMapper = TransactionDataMapper.from(entity);
    dataMapper = this.transactionRepository.save(dataMapper);
    return cast(dataMapper);
  }

  @Override
  public Transaction update(String id, Transaction entity) {
    TransactionDataMapper dataMapper = TransactionDataMapper.from(entity);
    dataMapper = this.transactionRepository.save(dataMapper);
    return cast(dataMapper);
  }

  @Override
  public Transaction findOneById(String id) {
    Optional<TransactionDataMapper> optional =
      this.transactionRepository.findById(id);

    return optional.isPresent() ? cast(optional.get()) : null;
  }

  @Override
  public List<Transaction> findAll() {
    List<TransactionDataMapper> dataMappers =
      this.transactionRepository.findAll();
    return dataMappers.stream().map(this::cast).toList();
  }

  private Transaction cast(TransactionDataMapper dataMapper) {
    return transactionFactory.create(
      dataMapper.getId(),
      dataMapper.getDate(),
      dataMapper.getAmount(),
      dataMapper.getPaymentType(),
      UserDataMapper.cast(dataMapper.getUser()),
      PaymentDataMapper.cast(dataMapper.getPayment())
    );
  }
}
