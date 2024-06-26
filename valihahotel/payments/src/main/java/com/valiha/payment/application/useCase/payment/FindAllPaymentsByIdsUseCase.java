package com.valiha.payment.application.useCase.payment;

import com.valiha.payment.application.dto.payment.PaymentResponseDto;
import java.util.List;

public interface FindAllPaymentsByIdsUseCase {
  List<PaymentResponseDto> execute(List<String> ids);
}
