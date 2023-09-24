package com.valiha.payment.presentation.controller;

import com.valiha.payment.application.dto.PaymentRequestDto;
import com.valiha.payment.application.dto.PaymentResponseDto;
import com.valiha.payment.application.useCase.payment.CreatePaymentUseCase;
import com.valiha.payment.application.useCase.payment.EditPaymentUseCase;
import com.valiha.payment.application.useCase.payment.FindAllPaymentsByIdsUseCase;
import com.valiha.payment.application.useCase.payment.FindAllPaymentsUseCase;
import com.valiha.payment.application.useCase.payment.FindOnePaymentUseCase;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @PostMapping
  public PaymentResponseDto create(@RequestBody PaymentRequestDto requestDto) {
    return this.createUseCase.execute(requestDto);
  }

  @GetMapping
  public List<PaymentResponseDto> findAll() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/ids")
  public List<PaymentResponseDto> findAllByIds(@RequestParam List<String> ids) {
    return this.findAllByIdsUseCase.execute(ids);
  }

  @GetMapping("/{id}")
  public PaymentResponseDto findOne(String id) {
    return this.findOneUseCase.execute(id);
  }

  @PutMapping("/{id}")
  public PaymentResponseDto edit(String id, PaymentRequestDto requestDto) {
    return this.editUseCase.execute(id, requestDto);
  }
}
