package com.valiha.payment.application.interactor.payment;

import com.valiha.payment.application.dto.payment.PaymentResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.application.useCase.payment.FindAllPaymentsUseCase;
import com.valiha.payment.core.entities.models.Payment;
import java.util.List;

public class FindAllPaymentsInteractor implements FindAllPaymentsUseCase {

  private final PaymentRepository paymentRepository;
  private final GenericPresenter<PaymentResponseDto> paymentPresenter;

  public FindAllPaymentsInteractor(
    PaymentRepository paymentRepository,
    GenericPresenter<PaymentResponseDto> paymentPresenter
  ) {
    this.paymentRepository = paymentRepository;
    this.paymentPresenter = paymentPresenter;
  }

  @Override
  public List<PaymentResponseDto> execute() {
    List<Payment> payments = this.paymentRepository.findAll();

    return this.paymentPresenter.prepareSuccessView(
        PaymentResponseDto.from(payments)
      );
  }
}
