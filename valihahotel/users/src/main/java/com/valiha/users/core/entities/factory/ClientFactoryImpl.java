package com.valiha.users.core.entities.factory;

import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.interfaces.factory.ClientFactory;

public class ClientFactoryImpl implements ClientFactory {

  @Override
  public Client create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email
  ) {
    return Client
      .builder()
      .id(id)
      .firstName(firstName)
      .lastName(lastName)
      .phoneNumber(phoneNumber)
      .email(email)
      .build();
  }
}
