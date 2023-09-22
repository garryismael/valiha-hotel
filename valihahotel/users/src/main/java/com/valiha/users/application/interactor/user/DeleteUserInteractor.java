package com.valiha.users.application.interactor.user;

import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.useCase.user.DeleteUserUseCase;
import com.valiha.users.core.constants.UserValidator;
import com.valiha.users.core.entities.model.User;
import java.util.HashMap;
import java.util.Map;

public class DeleteUserInteractor implements DeleteUserUseCase {

  private final UserRepository userRepository;
  private final GenericPresenter<UserResponseDto> userPresenter;

  public DeleteUserInteractor(
    UserRepository userRepository,
    GenericPresenter<UserResponseDto> userPresenter
  ) {
    this.userPresenter = userPresenter;
    this.userRepository = userRepository;
  }

  @Override
  public void execute(String id) {
    User user = this.userRepository.findOneById(id);

    if (user == null) {
      Map<String, String> errors = new HashMap<>();
      errors.put(UserValidator.KEY_ID, UserValidator.USER_NOT_FOUND_ERROR);
      this.userPresenter.prepareResourceNotFoundView(
          UserValidator.USER_NOT_FOUND_ERROR,
          errors
        );
    }
    userRepository.deleteById(id);
  }
}
