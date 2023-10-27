package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.payment.PaymentRequestDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.application.service.GenericService;
import com.valiha.reservation.infrastructure.repository.ApiPaymentService;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class PaymentServiceImpl
  implements GenericService<PaymentResponseDto, PaymentRequestDto> {

  private final ApiPaymentService paymentService;

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
