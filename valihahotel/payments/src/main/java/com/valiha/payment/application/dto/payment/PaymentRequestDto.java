package com.valiha.payment.application.dto.payment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequestDto {

  private int discount;
  private String state;
  private int amount;
  private String paymentType;
}
