package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.payment.PaymentRequestDto;
import com.valiha.location.application.dto.payment.PaymentResponseDto;
import com.valiha.location.application.service.GenericService;
import java.util.List;

public class PaymentServiceImpl
  implements GenericService<PaymentResponseDto, PaymentRequestDto> {

  private final ApiPaymentService paymentService;

  public PaymentServiceImpl(ApiPaymentService paymentService) {
    this.paymentService = paymentService;
  }

  @Override
  public PaymentResponseDto create(PaymentRequestDto requestDto) {
    return this.paymentService.create(requestDto);
  }

  @Override
  public List<PaymentResponseDto> findAllByIds(List<String> ids) {
    return this.paymentService.findAllByIds(ids);
  }

  @Override
  public PaymentResponseDto findOneById(String id) {
    return this.paymentService.findOneById(id);
  }
}
