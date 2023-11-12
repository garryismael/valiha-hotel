package com.valiha.payment.application.interactor.transaction;

import com.valiha.payment.application.dto.transaction.TransactionRequestDto;
import com.valiha.payment.application.dto.transaction.TransactionResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.application.useCase.transaction.EditTransactionUseCase;
import com.valiha.payment.core.entities.constants.TransactionValidator;
import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.interfaces.factory.TransactionFactory;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditTransactionInteractor implements EditTransactionUseCase {

  private final GenericPresenter<TransactionResponseDto> transactionPresenter;
  private final TransactionRepository transactionRepository;
  private final TransactionFactory transactionFactory;

  @Override
  public TransactionResponseDto execute(
    String id,
    TransactionRequestDto requestDto
  ) {
    Map<String, String> errors = new HashMap<>();

    Transaction transaction = this.transactionRepository.findOneById(id);

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

    transaction =
      transactionFactory.create(
        id,
        transaction.getDate(),
        requestDto.getAmount(),
        requestDto.getPaymentType(),
        transaction.getUser()
      );

    errors = transaction.validate();

    if (!errors.isEmpty()) {
      return this.transactionPresenter.prepareInvalidDataView(
          TransactionValidator.INVALID_TRANSACTION_DATA,
          errors
        );
    }

    transaction = transactionRepository.update(id, transaction);
    TransactionResponseDto responseDto = TransactionResponseDto.from(
      transaction
    );

    return this.transactionPresenter.prepareSuccessView(responseDto);
  }
}
