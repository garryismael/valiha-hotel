package com.valiha.payment.application.interactor.transaction;

import com.valiha.payment.application.dto.transaction.TransactionResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.application.useCase.transaction.FindTransactionByPaymentUseCase;
import com.valiha.payment.core.entities.constants.TransactionValidator;
import com.valiha.payment.core.entities.models.Transaction;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FindTransactionByPaymentInteractor
  implements FindTransactionByPaymentUseCase {

  private final GenericPresenter<TransactionResponseDto> transactionPresenter;
  private final TransactionRepository transactionRepository;

  @Override
  public TransactionResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<>();
    Transaction transaction = this.transactionRepository.findOneByPayment(id);

    if (transaction == null) {
      errors.put(
        TransactionValidator.KEY_ID,
        TransactionValidator.TRANSACTION_NOT_FOUND
      );
      return transactionPresenter.prepareResourceNotFoundView(
        TransactionValidator.TRANSACTION_NOT_FOUND,
        errors
      );
    }

    return transactionPresenter.prepareSuccessView(
      TransactionResponseDto.from(transaction)
    );
  }
}
