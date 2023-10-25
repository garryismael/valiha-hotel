package com.valiha.users.presentation.controller;

import com.valiha.users.application.dto.user.UserCommonDto;
import com.valiha.users.application.dto.user.UserRequestDto;
import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.useCase.user.DeleteUserUseCase;
import com.valiha.users.application.useCase.user.EditUserUseCase;
import com.valiha.users.application.useCase.user.FindAllUsersUseCase;
import com.valiha.users.application.useCase.user.FindOneUserUseCase;
import com.valiha.users.application.useCase.user.RegisterUserUseCase;
import com.valiha.users.infrastructure.services.UserService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/users")
@AllArgsConstructor
public class UserController {

  final RegisterUserUseCase registerUseCase;
  final FindAllUsersUseCase findAllUseCase;
  final FindOneUserUseCase findOneUseCase;
  final DeleteUserUseCase deleteUseCase;
  final EditUserUseCase updateUseCase;
  final UserService userService;

  @GetMapping
  public List<UserResponseDto> getUsers() {
    return findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public UserResponseDto getUser(@PathVariable String id) {
    return findOneUseCase.execute(id);
  }

  @PostMapping
  public UserResponseDto create(
    @RequestBody UserRequestDto requestModel,
    @RequestParam(name = "image") MultipartFile multipartFile
  ) {
    return userService.create(requestModel, multipartFile);
  }

  @PutMapping("/{id}")
  public UserResponseDto update(
    @PathVariable String id,
    @RequestBody UserCommonDto request,
    @RequestParam(name = "image", required = false) MultipartFile multipartFile
  ) {
    return userService.edit(id, request, multipartFile);
  }

  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable String id) {
    deleteUseCase.execute(id);
  }
}
