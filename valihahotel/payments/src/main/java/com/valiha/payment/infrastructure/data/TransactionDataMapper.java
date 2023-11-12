package com.valiha.payment.infrastructure.data;

import com.valiha.payment.core.entities.models.Transaction;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("transactions")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TransactionDataMapper {

  private String id;
  private LocalDateTime date;
  private int amount;
  private String paymentType;
  private String userId;

  @Transient
  private UserDataMapper user;

  @DBRef
  private PaymentDataMapper payment;

  public static TransactionDataMapper from(Transaction transaction) {
    return TransactionDataMapper
      .builder()
      .id(transaction.getId())
      .date(transaction.getDate())
      .amount(transaction.getAmount())
      .paymentType(transaction.getPaymentType())
      .userId(transaction.getUser().getId())
      .user(UserDataMapper.from(transaction.getUser()))
      .payment(PaymentDataMapper.from(transaction.getPayment()))
      .build();
  }

  public static List<TransactionDataMapper> from(
    List<Transaction> transactions
  ) {
    return transactions.stream().map(TransactionDataMapper::from).toList();
  }
}
