package com.valiha.payment.core.entities.factory;

import com.valiha.payment.core.entities.models.User;
import com.valiha.payment.core.interfaces.factory.UserFactory;

public class UserFactoryImpl implements UserFactory {

  @Override
  public User create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email,
    String image
  ) {
    return User
      .builder()
      .id(id)
      .firstName(firstName)
      .lastName(lastName)
      .phoneNumber(phoneNumber)
      .email(email)
      .image(image)
      .build();
  }
}
