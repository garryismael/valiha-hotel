package com.valiha.payment.presentation.controller;

import com.valiha.payment.application.dto.PaymentRequestDto;
import com.valiha.payment.application.dto.PaymentResponseDto;
import com.valiha.payment.application.useCase.payment.CreatePaymentUseCase;
import com.valiha.payment.application.useCase.payment.EditPaymentUseCase;
import com.valiha.payment.application.useCase.payment.FindAllPaymentsByIdsUseCase;
import com.valiha.payment.application.useCase.payment.FindAllPaymentsUseCase;
import com.valiha.payment.application.useCase.payment.FindOnePaymentUseCase;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/payments")
public class PaymentController {

  private final CreatePaymentUseCase createUseCase;
  private final EditPaymentUseCase editUseCase;
  private final FindAllPaymentsByIdsUseCase findAllByIdsUseCase;
  private final FindAllPaymentsUseCase findAllUseCase;
  private final FindOnePaymentUseCase findOneUseCase;

  public PaymentController(
    CreatePaymentUseCase createUseCase,
    EditPaymentUseCase editUseCase,
    FindAllPaymentsByIdsUseCase findAllByIdsUseCase,
    FindAllPaymentsUseCase findAllUseCase,
    FindOnePaymentUseCase findOneUseCase
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
    this.findAllByIdsUseCase = findAllByIdsUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
  }

  public PaymentResponseDto create(PaymentRequestDto requestDto) {
    return this.createUseCase.execute(requestDto);
  }

  public PaymentResponseDto findOne(String id) {
    return this.findOneUseCase.execute(id);
  }

  public PaymentResponseDto edit(String id, PaymentRequestDto requestDto) {
    return this.editUseCase.execute(id, requestDto);
  }

  public List<PaymentResponseDto> findAll(PaymentRequestDto requestDto) {
    return this.findAllUseCase.execute();
  }

  public List<PaymentResponseDto> findAllByIds(List<String> ids) {
    return this.findAllByIdsUseCase.execute(ids);
  }
}
