package com.valiha.users.application.useCase.user;

import com.valiha.users.application.dto.user.UserCommonDto;
import com.valiha.users.application.dto.user.UserResponseDto;
import java.io.File;

public interface EditUserUseCase {
  UserResponseDto execute(String id, UserCommonDto requestDto, File file);
}
