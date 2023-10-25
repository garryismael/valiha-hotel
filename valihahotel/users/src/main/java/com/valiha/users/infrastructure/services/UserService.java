package com.valiha.users.infrastructure.services;

import com.valiha.users.application.dto.user.UserCommonDto;
import com.valiha.users.application.dto.user.UserRequestDto;
import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.useCase.user.EditUserUseCase;
import com.valiha.users.application.useCase.user.RegisterUserUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
public class UserService {

  private final RegisterUserUseCase createUseCase;
  private final EditUserUseCase editUseCase;

  public UserResponseDto create(
    UserRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return createUseCase.execute(
      requestDto,
      StorageServiceImpl.convertToFile(multipartFile)
    );
  }

  public UserResponseDto edit(
    String id,
    UserCommonDto requestDto,
    MultipartFile multipartFile
  ) {
    return editUseCase.execute(
      id,
      requestDto,
      multipartFile == null || multipartFile.isEmpty()
        ? null
        : StorageServiceImpl.convertToFile(multipartFile)
    );
  }
}
