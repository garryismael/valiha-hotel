package com.valiha.users.application.interactor.user;

import com.valiha.users.application.dto.user.UserRequestDto;
import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.service.StorageService;
import com.valiha.users.application.useCase.user.RegisterUserUseCase;
import com.valiha.users.core.constants.UserValidator;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.core.interfaces.factory.UserFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RegisterUserInteractor implements RegisterUserUseCase {

  final UserRepository userRepository;
  final GenericPresenter<UserResponseDto> userPresenter;
  final UserFactory userFactory;
  private final StorageService storageService;

  @Override
  public UserResponseDto execute(UserRequestDto requestDto, File file) {
    Map<String, String> errors = new HashMap<String, String>();
    String image = null;

    try {
      image = this.storageService.upload(file, "users");
    } catch (IOException exception) {
      errors.put(UserValidator.KEY_IMAGE, UserValidator.UPLOAD_ERROR);
    }

    User user = userFactory.create(
      null,
      requestDto.getFirstName(),
      requestDto.getLastName(),
      requestDto.getPhoneNumber(),
      requestDto.getEmail(),
      image,
      requestDto.getPassword()
    );

    errors.putAll(user.validate());

    User dbUser = this.userRepository.findOneByEmail(requestDto.getEmail());
    if (dbUser != null) {
      errors.put(UserValidator.KEY_EMAIL, UserValidator.EMAIL_EXISTS_ERROR);
    }

    if (!errors.isEmpty()) {
      return userPresenter.prepareInvalidDataView(
        UserValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    user = this.userRepository.save(user);

    return userPresenter.prepareSuccessView(UserResponseDto.from(user));
  }
}
