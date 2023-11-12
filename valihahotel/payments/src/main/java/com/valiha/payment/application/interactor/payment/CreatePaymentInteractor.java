package com.valiha.payment.application.interactor.payment;

import com.valiha.payment.application.dto.payment.PaymentRequestDto;
import com.valiha.payment.application.dto.payment.PaymentResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.application.useCase.payment.CreatePaymentUseCase;
import com.valiha.payment.core.constants.PaymentValidator;
import com.valiha.payment.core.entities.models.Payment;
import com.valiha.payment.core.interfaces.factory.PaymentFactory;
import java.util.HashMap;
import java.util.Map;

public class CreatePaymentInteractor implements CreatePaymentUseCase {

  private final PaymentRepository paymentRepository;
  private final GenericPresenter<PaymentResponseDto> paymentPresenter;
  private final PaymentFactory paymentFactory;

  public CreatePaymentInteractor(
    PaymentRepository paymentRepository,
    GenericPresenter<PaymentResponseDto> paymentPresenter,
    PaymentFactory paymentFactory
  ) {
    this.paymentRepository = paymentRepository;
    this.paymentPresenter = paymentPresenter;
    this.paymentFactory = paymentFactory;
  }

  @Override
  public PaymentResponseDto execute(PaymentRequestDto requestDto) {
    Map<String, String> errors = new HashMap<>();

    Payment payment = paymentFactory.create(
      null,
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

    payment = this.paymentRepository.create(payment);

    return this.paymentPresenter.prepareSuccessView(
        PaymentResponseDto.from(payment)
      );
  }
}
