package com.valiha.payment.application.useCase.payment;

import com.valiha.payment.application.dto.PaymentRequestDto;
import com.valiha.payment.application.dto.PaymentResponseDto;

public interface EditPaymentUseCase {
  PaymentResponseDto execute(String id, PaymentRequestDto requestDto);
}
