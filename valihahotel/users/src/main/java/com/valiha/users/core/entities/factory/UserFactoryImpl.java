package com.valiha.users.core.entities.factory;

import com.valiha.users.core.entities.model.User;
import com.valiha.users.core.interfaces.factory.UserFactory;

public class UserFactoryImpl implements UserFactory {

  @Override
  public User create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email,
    String password
  ) {
    return User
      .builder()
      .id(id)
      .firstName(firstName)
      .lastName(lastName)
      .phoneNumber(phoneNumber)
      .email(email)
      .password(password)
      .build();
  }
}
