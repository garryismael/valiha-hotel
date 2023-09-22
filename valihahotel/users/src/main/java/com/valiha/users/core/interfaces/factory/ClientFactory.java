package com.valiha.users.core.interfaces.factory;

import com.valiha.users.core.entities.model.Client;

public interface ClientFactory {
  Client create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email
  );
}
