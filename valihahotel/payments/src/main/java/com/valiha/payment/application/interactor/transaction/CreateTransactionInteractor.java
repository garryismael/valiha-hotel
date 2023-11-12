package com.valiha.payment.application.interactor.transaction;

import com.valiha.payment.application.dto.transaction.TransactionRequestDto;
import com.valiha.payment.application.dto.transaction.TransactionResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.application.services.AuthService;
import com.valiha.payment.application.useCase.transaction.CreateTransactionUseCase;
import com.valiha.payment.core.entities.constants.TransactionValidator;
import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.core.interfaces.factory.TransactionFactory;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateTransactionInteractor implements CreateTransactionUseCase {

  private final AuthService authService;
  private final GenericPresenter<TransactionResponseDto> transactionPresenter;
  private final TransactionRepository transactionRepository;
  private final TransactionFactory transactionFactory;

  @Override
  public TransactionResponseDto execute(TransactionRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();

    User user = this.authService.getUser();

    Transaction transaction = transactionFactory.create(
      null,
      LocalDateTime.now(),
      requestDto.getAmount(),
      requestDto.getPaymentType(),
      user
    );

    errors = transaction.validate();

    if (!errors.isEmpty()) {
      return this.transactionPresenter.prepareInvalidDataView(
          TransactionValidator.INVALID_TRANSACTION_DATA,
          errors
        );
    }

    transaction = transactionRepository.create(transaction);

    TransactionResponseDto responseDto = TransactionResponseDto.from(
      transaction
    );

    return this.transactionPresenter.prepareSuccessView(responseDto);
  }
}
