package com.valiha.location.core.interfaces.factory;

import com.valiha.location.core.entities.models.Client;

public interface ClientFactory {
  Client create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email
  );
}
