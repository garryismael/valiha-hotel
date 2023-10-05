package com.valiha.reservation.application.dto.payment;

import com.valiha.reservation.core.entities.models.Payment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentRequestDto {

  private int discount;
  private String state;

  public static PaymentRequestDto from(Payment payment) {
    return PaymentRequestDto
      .builder()
      .discount(payment.getDiscount())
      .state(payment.getState())
      .build();
  }

  public static Payment toPayment(PaymentRequestDto requestDto) {
    return Payment
      .builder()
      .id(null)
      .discount(requestDto.discount)
      .state(requestDto.state)
      .build();
  }
}
