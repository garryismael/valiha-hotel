package com.valiha.users.application.interactor.user;

import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.useCase.user.FindAllUsersUseCase;
import com.valiha.users.core.entities.model.User;
import java.util.List;

public class FindAllUsersInteractor implements FindAllUsersUseCase {

  final UserRepository userRepository;
  final GenericPresenter<UserResponseDto> userPresenter;

  public FindAllUsersInteractor(
    UserRepository userRepository,
    GenericPresenter<UserResponseDto> userPresenter
  ) {
    this.userRepository = userRepository;
    this.userPresenter = userPresenter;
  }

  @Override
  public List<UserResponseDto> execute() {
    List<User> users = this.userRepository.findAll();

    return userPresenter.prepareSuccessView(UserResponseDto.from(users));
  }
}
