package com.valiha.users.presentation.controller;

import com.valiha.users.application.dto.contact.ContactRequestDto;
import com.valiha.users.application.dto.contact.ContactResponseDto;
import com.valiha.users.application.useCase.contact.CreateContactUseCase;
import com.valiha.users.application.useCase.contact.DeleteContactUseCase;
import com.valiha.users.application.useCase.contact.FindAllContactsUseCase;
import com.valiha.users.application.useCase.contact.FindOneContactUseCase;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/contacts")
public class ContactController {

  private final CreateContactUseCase createUseCase;
  private final FindAllContactsUseCase findAllUseCase;
  private final FindOneContactUseCase findOneUseCase;
  private final DeleteContactUseCase deleteUseCase;

  public ContactController(
    CreateContactUseCase registerUseCase,
    FindAllContactsUseCase findAllUseCase,
    FindOneContactUseCase findOneUseCase,
    DeleteContactUseCase deleteUseCase
  ) {
    this.createUseCase = registerUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  @PostMapping
  public ContactResponseDto register(
    @RequestBody ContactRequestDto requestDto
  ) {
    return this.createUseCase.execute(requestDto);
  }

  @GetMapping
  public List<ContactResponseDto> findAll() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public ContactResponseDto findOne(@PathVariable String id) {
    return this.findOneUseCase.execute(id);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable String id) {
    this.deleteUseCase.execute(id);
  }
}
