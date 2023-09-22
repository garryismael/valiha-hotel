package com.valiha.users.application.useCase.user;

import com.valiha.users.application.dto.user.UserRequestDto;
import com.valiha.users.application.dto.user.UserResponseDto;

public interface RegisterUserUseCase {
  UserResponseDto execute(UserRequestDto requestDto);
}
