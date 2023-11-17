package com.valiha.payment.infrastructure.service;

import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.application.repository.UserRepository;
import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.core.interfaces.factory.TransactionFactory;
import com.valiha.payment.infrastructure.data.PaymentDataMapper;
import com.valiha.payment.infrastructure.data.TransactionDataMapper;
import com.valiha.payment.infrastructure.data.UserDataMapper;
import com.valiha.payment.infrastructure.repository.MongoTransactionRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class TransactionRepositoryImpl implements TransactionRepository {

  private final MongoTransactionRepository transactionRepository;
  private final TransactionFactory transactionFactory;
  private final UserRepository userRepository;

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
    List<String> ids = dataMappers
      .stream()
      .map(mapper -> mapper.getUserId())
      .toList();
    List<User> users = this.userRepository.findAllByIds(ids);
    return IntStream
      .range(0, dataMappers.size())
      .mapToObj(i -> {
        TransactionDataMapper transaction = dataMappers.get(i);
        int index = IntStream
          .range(0, users.size())
          .filter(j -> users.get(j).getId().equals(transaction.getUserId()))
          .findFirst()
          .orElse(-1);

        User user = users.get(index);

        return Transaction
          .builder()
          .id(transaction.getId())
          .date(transaction.getDate())
          .amount(transaction.getAmount())
          .paymentType(transaction.getPaymentType())
          .payment(PaymentDataMapper.cast(transaction.getPayment()))
          .user(user)
          .build();
      })
      .collect(Collectors.toList());
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

  @Override
  public Transaction findOneByPayment(String id) {
    Optional<TransactionDataMapper> optional =
      this.transactionRepository.findByPaymentId(id);
    if (optional.isPresent()) {
      TransactionDataMapper transaction = optional.get();
      User user = this.userRepository.findOneById(transaction.getUserId());
      return Transaction
        .builder()
        .id(transaction.getId())
        .date(transaction.getDate())
        .amount(transaction.getAmount())
        .paymentType(transaction.getPaymentType())
        .payment(PaymentDataMapper.cast(transaction.getPayment()))
        .user(user)
        .build();
    }
    return null;
  }
}
