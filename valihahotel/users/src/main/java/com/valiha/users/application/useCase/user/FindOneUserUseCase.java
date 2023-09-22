package com.valiha.users.application.useCase.user;

import com.valiha.users.application.dto.user.UserResponseDto;

public interface FindOneUserUseCase {
  UserResponseDto execute(String id);
}
