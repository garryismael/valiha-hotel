package com.valiha.payment.application.interactor.payment;

import com.valiha.payment.application.dto.PaymentResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.application.useCase.payment.FindOnePaymentUseCase;
import com.valiha.payment.core.constants.PaymentValidator;
import com.valiha.payment.core.entities.models.Payment;
import java.util.HashMap;
import java.util.Map;

public class FindOnePaymentInteractor implements FindOnePaymentUseCase {

  private final PaymentRepository paymentRepository;
  private final GenericPresenter<PaymentResponseDto> paymentPresenter;

  public FindOnePaymentInteractor(
    PaymentRepository paymentRepository,
    GenericPresenter<PaymentResponseDto> paymentPresenter
  ) {
    this.paymentRepository = paymentRepository;
    this.paymentPresenter = paymentPresenter;
  }

  @Override
  public PaymentResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<>();
    Payment payment = this.paymentRepository.findOneById(id);

    if (payment == null) {
      errors.put(
        PaymentValidator.KEY_ID,
        PaymentValidator.PAYMENT_NOT_FOUND_ERROR
      );
      return this.paymentPresenter.prepareResourceNotFoundView(id, errors);
    }

    return this.paymentPresenter.prepareSuccessView(
        PaymentResponseDto.from(payment)
      );
  }
}
