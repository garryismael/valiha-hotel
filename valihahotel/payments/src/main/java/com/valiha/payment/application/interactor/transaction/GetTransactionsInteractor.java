package com.valiha.payment.application.interactor.transaction;

import com.valiha.payment.application.dto.transaction.TransactionResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.application.useCase.transaction.GetTransactionsUseCase;
import com.valiha.payment.core.entities.models.Transaction;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class GetTransactionsInteractor implements GetTransactionsUseCase {

  private final GenericPresenter<TransactionResponseDto> transactionPresenter;
  private final TransactionRepository transactionRepository;

  @Override
  public List<TransactionResponseDto> execute() {
    List<Transaction> transactions = this.transactionRepository.findAll();

    return transactionPresenter.prepareSuccessView(
      TransactionResponseDto.from(transactions)
    );
  }
}
