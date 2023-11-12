package com.valiha.payment.application.useCase.transaction;

import com.valiha.payment.application.dto.transaction.TransactionResponseDto;
import java.util.List;

public interface GetTransactionsUseCase {
  List<TransactionResponseDto> execute();
}
