package com.valiha.payment.application.useCase.payment;

import com.valiha.payment.application.dto.payment.PaymentResponseDto;
import java.util.List;

public interface FindAllPaymentsUseCase {
  List<PaymentResponseDto> execute();
}
