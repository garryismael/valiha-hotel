package com.valiha.payment.infrastructure.service;

import com.valiha.payment.application.repository.UserRepository;
import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.infrastructure.constants.UserData;
import com.valiha.payment.infrastructure.data.UserDataMapper;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class UserRepositoryImpl implements UserRepository {

  private final KeycloakService keycloakService;

  @Override
  public List<User> findAllByIds(List<String> ids) {
    List<UserDataMapper> dataMappers = this.keycloakService.findByIds(ids);
    return dataMappers.stream().map(dataMapper -> toUser(dataMapper)).toList();
  }

  public static User toUser(UserDataMapper user) {
    return User
      .builder()
      .id(user.getId())
      .firstName(user.getFirstName())
      .lastName(user.getLastName())
      .phoneNumber(user.getPhoneNumber())
      .email(user.getEmail())
      .image(String.format("%s/%s", UserData.BASE_URL, user.getImage()))
      .build();
  }

  @Override
  public User findOneById(String id) {
    UserDataMapper dataMapper = this.keycloakService.findOneById(id);
    return toUser(dataMapper);
  }
}
