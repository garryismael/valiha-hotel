package com.valiha.payment.application.interactor.payment;

import com.valiha.payment.application.dto.payment.PaymentRequestDto;
import com.valiha.payment.application.dto.payment.PaymentResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.application.repository.TransactionRepository;
import com.valiha.payment.application.services.AuthService;
import com.valiha.payment.application.useCase.payment.EditPaymentUseCase;
import com.valiha.payment.core.entities.constants.PaymentValidator;
import com.valiha.payment.core.entities.constants.TransactionValidator;
import com.valiha.payment.core.entities.models.Payment;
import com.valiha.payment.core.entities.models.Transaction;
import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.core.interfaces.factory.PaymentFactory;
import com.valiha.payment.core.interfaces.factory.TransactionFactory;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditPaymentInteractor implements EditPaymentUseCase {

  private final PaymentRepository paymentRepository;
  private final GenericPresenter<PaymentResponseDto> paymentPresenter;
  private final PaymentFactory paymentFactory;
  private final AuthService authService;
  private final TransactionRepository transactionRepository;
  private final TransactionFactory transactionFactory;

  @Override
  public PaymentResponseDto execute(String id, PaymentRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();
    Payment payment = this.paymentRepository.findOneById(id);

    if (payment == null) {
      errors.put(
        PaymentValidator.KEY_ID,
        PaymentValidator.PAYMENT_NOT_FOUND_ERROR
      );
      return this.paymentPresenter.prepareResourceNotFoundView(id, errors);
    }

    payment =
      paymentFactory.create(
        payment.getId(),
        requestDto.getDiscount(),
        requestDto.getState()
      );

    errors = payment.validate();

    if (!errors.isEmpty()) {
      return this.paymentPresenter.prepareInvalidDataView(
          PaymentValidator.INVALID_PAYMENT_DATA,
          errors
        );
    }

    if (payment.getState().equals("paid")) {
      Transaction data = transactionRepository.findOneByPayment(id);
      if (data == null) {
        User user = this.authService.getUser();

        Transaction transaction = transactionFactory.create(
          null,
          LocalDateTime.now(),
          requestDto.getAmount(),
          requestDto.getPaymentType(),
          user,
          payment
        );

        errors = transaction.validate();

        if (!errors.isEmpty()) {
          return this.paymentPresenter.prepareInvalidDataView(
              TransactionValidator.INVALID_TRANSACTION_DATA,
              errors
            );
        }
        transactionRepository.create(transaction);
      } else {
        data =
          transactionFactory.create(
            data.getId(),
            data.getDate(),
            requestDto.getAmount(),
            requestDto.getPaymentType(),
            data.getUser(),
            data.getPayment()
          );

        errors = data.validate();

        if (!errors.isEmpty()) {
          return this.paymentPresenter.prepareInvalidDataView(
              TransactionValidator.INVALID_TRANSACTION_DATA,
              errors
            );
        }

        transactionRepository.update(data.getId(), data);
      }
    }

    payment = this.paymentRepository.update(id, payment);
    PaymentResponseDto response = PaymentResponseDto.from(payment);
    return this.paymentPresenter.prepareSuccessView(response);
  }
}
