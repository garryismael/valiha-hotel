package com.valiha.location.infrastructure.data;

import com.valiha.location.application.dto.payment.PaymentResponseDto;
import com.valiha.location.core.entities.models.Payment;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentDataMapper {

  private String id;
  private int discount;
  private String state;

  public static Payment toPayment(PaymentDataMapper dataMapper) {
    return Payment
      .builder()
      .id(dataMapper.id)
      .discount(dataMapper.discount)
      .state(dataMapper.state)
      .build();
  }

  public static Payment toPayment(PaymentResponseDto responseDto) {
    return Payment
      .builder()
      .id(responseDto.getId())
      .state(responseDto.getState())
      .discount(responseDto.getDiscount())
      .build();
  }

  public static PaymentDataMapper from(PaymentResponseDto responseDto) {
    return PaymentDataMapper
      .builder()
      .id(responseDto.getId())
      .state(responseDto.getState())
      .discount(responseDto.getDiscount())
      .build();
  }

  public static PaymentDataMapper from(Payment payment) {
    return PaymentDataMapper
      .builder()
      .id(payment.getId())
      .discount(payment.getDiscount())
      .state(payment.getState())
      .build();
  }

  public static List<PaymentDataMapper> from(List<Payment> payments) {
    return payments.stream().map(PaymentDataMapper::from).toList();
  }
}
