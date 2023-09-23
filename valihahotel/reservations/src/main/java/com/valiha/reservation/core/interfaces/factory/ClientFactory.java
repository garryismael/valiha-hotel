package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Client;

public interface ClientFactory {
  Client create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email
  );
}
