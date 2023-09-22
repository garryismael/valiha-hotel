package com.valiha.users.presentation.controller;

import com.valiha.users.application.dto.user.UserCommonDto;
import com.valiha.users.application.dto.user.UserRequestDto;
import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.useCase.user.DeleteUserUseCase;
import com.valiha.users.application.useCase.user.EditUserUseCase;
import com.valiha.users.application.useCase.user.FindAllUsersUseCase;
import com.valiha.users.application.useCase.user.FindOneUserUseCase;
import com.valiha.users.application.useCase.user.RegisterUserUseCase;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserController {

  final RegisterUserUseCase registerUseCase;
  final FindAllUsersUseCase findAllUseCase;
  final FindOneUserUseCase findOneUseCase;
  final DeleteUserUseCase deleteUseCase;
  final EditUserUseCase updateUseCase;

  public UserController(
    RegisterUserUseCase registerUseCase,
    FindAllUsersUseCase findAllUseCase,
    FindOneUserUseCase findOneUseCase,
    DeleteUserUseCase deleteUseCase,
    EditUserUseCase updateUseCase
  ) {
    this.registerUseCase = registerUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findOneUseCase = findOneUseCase;
    this.updateUseCase = updateUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  @GetMapping
  public List<UserResponseDto> getUsers() {
    return findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public UserResponseDto getUser(@PathVariable("id") String id) {
    return findOneUseCase.execute(id);
  }

  @PostMapping
  public UserResponseDto create(@RequestBody UserRequestDto requestModel) {
    return registerUseCase.execute(requestModel);
  }

  @PutMapping("/{id}")
  public UserResponseDto update(
    @PathVariable("id") String id,
    @RequestBody UserCommonDto request
  ) {
    return updateUseCase.execute(id, request);
  }

  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable String id) {
    deleteUseCase.execute(id);
  }
}
