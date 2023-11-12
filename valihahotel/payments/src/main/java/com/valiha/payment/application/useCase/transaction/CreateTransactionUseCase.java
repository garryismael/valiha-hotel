package com.valiha.payment.application.useCase.transaction;

import com.valiha.payment.application.dto.transaction.TransactionRequestDto;
import com.valiha.payment.application.dto.transaction.TransactionResponseDto;

public interface CreateTransactionUseCase {
  TransactionResponseDto execute(TransactionRequestDto requestDto);
}
