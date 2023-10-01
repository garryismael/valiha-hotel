package com.valiha.payment.application.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequestDto {

  private int discount;
  private String state;
}
