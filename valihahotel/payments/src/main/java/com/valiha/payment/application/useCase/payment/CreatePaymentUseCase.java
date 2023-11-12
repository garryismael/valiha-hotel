package com.valiha.payment.application.useCase.payment;

import com.valiha.payment.application.dto.payment.PaymentRequestDto;
import com.valiha.payment.application.dto.payment.PaymentResponseDto;

public interface CreatePaymentUseCase {
  PaymentResponseDto execute(PaymentRequestDto requestDto);
}
