package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.interfaces.factory.ClientFactory;

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
