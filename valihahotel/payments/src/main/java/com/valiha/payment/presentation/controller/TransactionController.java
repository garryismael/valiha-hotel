package com.valiha.payment.presentation.controller;

import com.valiha.payment.application.dto.transaction.TransactionRequestDto;
import com.valiha.payment.application.dto.transaction.TransactionResponseDto;
import com.valiha.payment.application.useCase.transaction.CreateTransactionUseCase;
import com.valiha.payment.application.useCase.transaction.EditTransactionUseCase;
import com.valiha.payment.application.useCase.transaction.FindTransactionUseCase;
import com.valiha.payment.application.useCase.transaction.GetTransactionsUseCase;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/transactions")
@AllArgsConstructor
public class TransactionController {

  private final CreateTransactionUseCase createUseCase;
  private final EditTransactionUseCase editUseCase;
  private final FindTransactionUseCase findUseCase;
  private final GetTransactionsUseCase getUseCase;

  @PostMapping
  public TransactionResponseDto create(
    @RequestBody TransactionRequestDto entity
  ) {
    return this.createUseCase.execute(entity);
  }

  @PostMapping("/{id}")
  public TransactionResponseDto edit(
    @PathVariable String id,
    @RequestBody TransactionRequestDto requestDto
  ) {
    return this.editUseCase.execute(id, requestDto);
  }

  @GetMapping("/{id}")
  public TransactionResponseDto find(@PathVariable String id) {
    return this.findUseCase.execute(id);
  }

  @GetMapping
  public List<TransactionResponseDto> findAll() {
    return this.getUseCase.execute();
  }
}
