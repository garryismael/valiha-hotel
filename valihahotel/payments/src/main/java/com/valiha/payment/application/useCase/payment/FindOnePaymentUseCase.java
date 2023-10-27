package com.valiha.payment.application.useCase.payment;

import com.valiha.payment.application.dto.PaymentResponseDto;

public interface FindOnePaymentUseCase {
  PaymentResponseDto execute(String id);
}
