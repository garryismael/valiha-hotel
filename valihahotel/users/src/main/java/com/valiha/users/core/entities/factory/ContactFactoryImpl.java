package com.valiha.users.core.entities.factory;

import com.valiha.users.core.entities.model.Client;
import com.valiha.users.core.entities.model.Contact;
import com.valiha.users.core.interfaces.factory.ContactFactory;

public class ContactFactoryImpl implements ContactFactory {

  @Override
  public Contact create(
    String id,
    Client client,
    String subject,
    String message
  ) {
    return Contact
      .builder()
      .id(id)
      .client(client)
      .subject(subject)
      .message(message)
      .build();
  }
}
