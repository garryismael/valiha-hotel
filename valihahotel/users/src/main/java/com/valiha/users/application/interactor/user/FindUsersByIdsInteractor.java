package com.valiha.users.application.interactor.user;

import com.valiha.users.application.dto.user.UserResponseDto;
import com.valiha.users.application.presenter.GenericPresenter;
import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.application.useCase.user.FindUsersByIdsUseCase;
import com.valiha.users.core.entities.model.User;
import java.util.List;

public class FindUsersByIdsInteractor implements FindUsersByIdsUseCase {

  final UserRepository userRepository;
  final GenericPresenter<UserResponseDto> userPresenter;

  public FindUsersByIdsInteractor(
    UserRepository userRepository,
    GenericPresenter<UserResponseDto> userPresenter
  ) {
    this.userRepository = userRepository;
    this.userPresenter = userPresenter;
  }

  @Override
  public List<UserResponseDto> execute(List<String> ids) {
    List<User> users = this.userRepository.findAllByIds(ids);

    return userPresenter.prepareSuccessView(UserResponseDto.from(users));
  }
}
