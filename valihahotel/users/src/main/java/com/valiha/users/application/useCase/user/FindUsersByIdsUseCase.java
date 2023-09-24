package com.valiha.users.application.useCase.user;

import com.valiha.users.application.dto.user.UserResponseDto;
import java.util.List;

public interface FindUsersByIdsUseCase {
  List<UserResponseDto> execute(List<String> ids);
}
