package com.valiha.location.application.service;

import com.valiha.location.application.dto.payment.PaymentRequestDto;
import com.valiha.location.application.dto.payment.PaymentResponseDto;
import java.util.List;

public interface PaymentService {
  PaymentResponseDto create(PaymentRequestDto requestDto);
  List<PaymentResponseDto> findAllByIds(List<String> ids);
}
