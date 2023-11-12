package com.valiha.payment.application.dto.transaction;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransactionRequestDto {

  int amount;
  String paymentType;
}
