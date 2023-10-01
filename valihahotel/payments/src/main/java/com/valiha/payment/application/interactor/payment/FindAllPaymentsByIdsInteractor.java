package com.valiha.payment.application.interactor.payment;

import com.valiha.payment.application.dto.PaymentResponseDto;
import com.valiha.payment.application.presenter.GenericPresenter;
import com.valiha.payment.application.repository.PaymentRepository;
import com.valiha.payment.application.useCase.payment.FindAllPaymentsByIdsUseCase;
import com.valiha.payment.core.entities.models.Payment;
import java.util.ArrayList;
import java.util.List;

public class FindAllPaymentsByIdsInteractor
  implements FindAllPaymentsByIdsUseCase {

  private final PaymentRepository paymentRepository;
  private final GenericPresenter<PaymentResponseDto> paymentPresenter;

  public FindAllPaymentsByIdsInteractor(
    PaymentRepository paymentRepository,
    GenericPresenter<PaymentResponseDto> paymentPresenter
  ) {
    this.paymentRepository = paymentRepository;
    this.paymentPresenter = paymentPresenter;
  }

  @Override
  public List<PaymentResponseDto> execute(List<String> ids) {
    if (ids == null) {
      ids = new ArrayList<>();
    }
    List<Payment> payments = this.paymentRepository.findAllByIds(ids);

    return this.paymentPresenter.prepareSuccessView(
        PaymentResponseDto.from(payments)
      );
  }
}
