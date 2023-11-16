package com.valiha.payment.infrastructure.data;

import com.valiha.payment.core.entities.models.Payment;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("payments")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PaymentDataMapper {

  @Id
  private String id;

  private int discount;
  private String state;

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

  public static Payment cast(PaymentDataMapper dataMapper) {
    return Payment
      .builder()
      .id(dataMapper.getId())
      .discount(dataMapper.getDiscount())
      .state(dataMapper.getState())
      .build();
  }
}
