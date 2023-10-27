package com.valiha.users.presentation.controller;

import com.valiha.users.application.dto.client.ClientRequestDto;
import com.valiha.users.application.dto.client.ClientResponseDto;
import com.valiha.users.application.useCase.client.EditClientUseCase;
import com.valiha.users.application.useCase.client.FindAllClientsUseCase;
import com.valiha.users.application.useCase.client.FindClientsByIdsUseCase;
import com.valiha.users.application.useCase.client.FindOneClientUseCase;
import com.valiha.users.application.useCase.client.RegisterClientUseCase;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/clients")
public class ClientController {

  private final RegisterClientUseCase registerUseCase;
  private final FindAllClientsUseCase findAllUseCase;
  private final FindOneClientUseCase findOneUseCase;
  private final EditClientUseCase updateUseCase;
  private final FindClientsByIdsUseCase findAllByIdsUseCase;

  public ClientController(
    RegisterClientUseCase registerUseCase,
    FindAllClientsUseCase findAllUseCase,
    FindOneClientUseCase findOneUseCase,
    EditClientUseCase updateUseCase,
    FindClientsByIdsUseCase findAllByIdsUseCase
  ) {
    this.registerUseCase = registerUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
    this.updateUseCase = updateUseCase;
    this.findAllByIdsUseCase = findAllByIdsUseCase;
  }

  @PostMapping
  public ClientResponseDto register(@RequestBody ClientRequestDto requestDto) {
    return this.registerUseCase.execute(requestDto);
  }

  @GetMapping
  public List<ClientResponseDto> findAll() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/ids")
  public List<ClientResponseDto> findAllByIds(@RequestParam List<String> ids) {
    return this.findAllByIdsUseCase.execute(ids);
  }

  @GetMapping("/{id}")
  public ClientResponseDto findOne(@PathVariable String id) {
    return this.findOneUseCase.execute(id);
  }

  @PutMapping("/{id}")
  public ClientResponseDto update(
    @PathVariable String id,
    @RequestBody ClientRequestDto requestDto
  ) {
    return this.updateUseCase.execute(id, requestDto);
  }
}
