package com.valiha.payment.application.dto.payment;

import com.valiha.payment.core.entities.models.Payment;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentResponseDto {

  private String id;
  private int discount;
  private String state;

  public static PaymentResponseDto from(Payment payment) {
    return PaymentResponseDto
      .builder()
      .id(payment.getId())
      .discount(payment.getDiscount())
      .state(payment.getState())
      .build();
  }

  public static List<PaymentResponseDto> from(List<Payment> payments) {
    return payments.stream().map(PaymentResponseDto::from).toList();
  }
}
