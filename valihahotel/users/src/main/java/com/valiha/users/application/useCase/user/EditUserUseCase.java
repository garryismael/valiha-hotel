package com.valiha.users.application.useCase.user;

import com.valiha.users.application.dto.user.UserCommonDto;
import com.valiha.users.application.dto.user.UserResponseDto;

public interface EditUserUseCase {
  UserResponseDto execute(String id, UserCommonDto requestDto);
}
