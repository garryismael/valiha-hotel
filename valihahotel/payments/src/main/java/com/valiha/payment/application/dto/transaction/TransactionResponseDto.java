package com.valiha.payment.application.dto.transaction;

import com.valiha.payment.application.dto.user.UserResponseDto;
import com.valiha.payment.application.utils.DateFormatter;
import com.valiha.payment.core.entities.constants.AppPayment;
import com.valiha.payment.core.entities.models.Transaction;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TransactionResponseDto {

  String id;
  int amount;
  String date;
  String paymentType;
  UserResponseDto user;

  public static TransactionResponseDto from(Transaction transaction) {
    return TransactionResponseDto
      .builder()
      .id(transaction.getId())
      .amount(transaction.getAmount())
      .date(
        DateFormatter.parse(transaction.getDate(), AppPayment.DATE_TIME_FORMAT)
      )
      .paymentType(transaction.getPaymentType())
      .user(UserResponseDto.from(transaction.getUser()))
      .build();
  }

  public static List<TransactionResponseDto> from(
    List<Transaction> transactions
  ) {
    return transactions.stream().map(TransactionResponseDto::from).toList();
  }
}
