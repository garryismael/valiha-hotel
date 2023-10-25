package com.valiha.users.infrastructure.services;

import com.valiha.users.application.repository.UserRepository;
import com.valiha.users.core.entities.model.User;
import com.valiha.users.infrastructure.data.UserDataMapper;
import java.util.List;
import java.util.stream.Collectors;

public class UserRepositoryImpl implements UserRepository {

  private final KeycloakService keycloakService;

  public UserRepositoryImpl(KeycloakService keycloakService) {
    this.keycloakService = keycloakService;
  }

  @Override
  public User save(User user) {
    UserDataMapper dataMapper =
      this.keycloakService.save(
          user.getFirstName(),
          user.getLastName(),
          user.getPhoneNumber(),
          user.getEmail(),
          user.getImage(),
          user.getPassword()
        );
    return toUser(dataMapper);
  }

  @Override
  public User update(String id, User user) {
    UserDataMapper userRepresentation =
      this.keycloakService.update(
          id,
          user.getFirstName(),
          user.getLastName(),
          user.getPhoneNumber(),
          user.getEmail(),
          user.getImage()
        );
    return toUser(userRepresentation);
  }

  @Override
  public User findOneById(String id) {
    try {
      UserDataMapper dataMapper = this.keycloakService.findOneById(id);
      return toUser(dataMapper);
    } catch (Exception e) {
      return null;
    }
  }

  @Override
  public List<User> findAll() {
    return keycloakService
      .findAll()
      .stream()
      .map(dataMapper -> toUser(dataMapper))
      .collect(Collectors.toList());
  }

  @Override
  public void deleteById(String id) {
    keycloakService.deleteUser(id);
  }

  @Override
  public User findOneByEmail(String email) {
    UserDataMapper dataMapper = keycloakService.findOneByEmail(email);
    return dataMapper != null ? toUser(dataMapper) : null;
  }

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
      .image(user.getImage())
      .build();
  }
}
