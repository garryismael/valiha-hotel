package com.valiha.payment.application.interactor.payment;

import com.valiha.payment.application.dto.payment.PaymentRequestDto;
import com.valiha.payment.application.dto.payment.PaymentResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.application.useCase.payment.EditPaymentUseCase;
import com.valiha.payment.core.entities.constants.PaymentValidator;
import com.valiha.payment.core.entities.models.Payment;
import com.valiha.payment.core.interfaces.factory.PaymentFactory;
import java.util.HashMap;
import java.util.Map;

public class EditPaymentInteractor implements EditPaymentUseCase {

  private final PaymentRepository paymentRepository;
  private final GenericPresenter<PaymentResponseDto> paymentPresenter;
  private final PaymentFactory paymentFactory;

  public EditPaymentInteractor(
    PaymentRepository paymentRepository,
    GenericPresenter<PaymentResponseDto> paymentPresenter,
    PaymentFactory paymentFactory
  ) {
    this.paymentRepository = paymentRepository;
    this.paymentPresenter = paymentPresenter;
    this.paymentFactory = paymentFactory;
  }

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
        id,
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

    payment = this.paymentRepository.update(id, payment);

    return this.paymentPresenter.prepareSuccessView(
        PaymentResponseDto.from(payment)
      );
  }
}
