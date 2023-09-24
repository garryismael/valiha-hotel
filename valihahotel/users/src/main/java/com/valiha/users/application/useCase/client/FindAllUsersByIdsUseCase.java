package com.valiha.users.application.useCase.client;

import com.valiha.users.application.dto.user.UserResponseDto;
import java.util.List;

public interface FindAllUsersByIdsUseCase {
  List<UserResponseDto> execute(List<String> ids);
}
