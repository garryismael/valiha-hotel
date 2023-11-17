package com.valiha.payment.application.useCase.transaction;

import com.valiha.payment.application.dto.transaction.TransactionResponseDto;

public interface FindTransactionByPaymentUseCase {
  TransactionResponseDto execute(String id);
}
