package com.valiha.users.application.interactor.user;

import com.valiha.users.application.dto.user.UserCommonDto;
import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.service.StorageService;
import com.valiha.users.application.useCase.user.EditUserUseCase;
import com.valiha.users.core.constants.UserValidator;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.core.interfaces.factory.UserFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditUserInteractor implements EditUserUseCase {

  final UserRepository userRepository;
  final GenericPresenter<UserResponseDto> userPresenter;
  final UserFactory userFactory;
  private final StorageService storageService;

  @Override
  public UserResponseDto execute(
    String id,
    UserCommonDto requestDto,
    File file
  ) {
    Map<String, String> errors = new HashMap<String, String>();
    String image = null;
    User user = this.userRepository.findOneById(id);

    if (user == null) {
      errors.put(UserValidator.KEY_ID, UserValidator.USER_NOT_FOUND_ERROR);
      return userPresenter.prepareResourceNotFoundView(
        UserValidator.KEY_ID,
        errors
      );
    } else {
      image = user.getImage();
    }

    if (file != null) {
      try {
        image = this.storageService.upload(file, "blogs");
      } catch (IOException exception) {
        errors.put(UserValidator.KEY_IMAGE, UserValidator.UPLOAD_ERROR);
      }
    }

    user =
      userFactory.create(
        user.getId(),
        requestDto.getFirstName(),
        requestDto.getLastName(),
        requestDto.getPhoneNumber(),
        requestDto.getEmail(),
        image,
        user.getPassword()
      );

    errors.putAll(user.validateEdit());

    User dbUser = this.userRepository.findOneByEmail(requestDto.getEmail());
    if (dbUser != null && !dbUser.getId().equals(user.getId())) {
      errors.put(UserValidator.KEY_EMAIL, UserValidator.EMAIL_EXISTS_ERROR);
    }

    if (!errors.isEmpty()) {
      return userPresenter.prepareInvalidDataView(
        UserValidator.INVALID_DATA_MESSAGE,
        errors
      );
    }

    user = userRepository.update(id, user);

    return userPresenter.prepareSuccessView(UserResponseDto.from(user));
  }
}
