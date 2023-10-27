package com.valiha.users.application.interactor.user;

import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.useCase.user.FindOneUserUseCase;
import com.valiha.users.core.constants.UserValidator;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.core.interfaces.factory.UserFactory;
import java.util.HashMap;
import java.util.Map;

public class FindOneUserInteractor implements FindOneUserUseCase {

  final UserRepository userRepository;
  final GenericPresenter<UserResponseDto> userPresenter;
  final UserFactory userFactory;

  public FindOneUserInteractor(
    UserRepository userRepository,
    GenericPresenter<UserResponseDto> userPresenter,
    UserFactory userFactory
  ) {
    this.userRepository = userRepository;
    this.userPresenter = userPresenter;
    this.userFactory = userFactory;
  }

  @Override
  public UserResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<String, String>();
    User user = this.userRepository.findOneById(id);

    if (user == null) {
      errors.put(UserValidator.KEY_ID, UserValidator.USER_NOT_FOUND_ERROR);
      return userPresenter.prepareResourceNotFoundView(
        UserValidator.KEY_ID,
        errors
      );
    }
    return userPresenter.prepareSuccessView(UserResponseDto.from(user));
  }
}
