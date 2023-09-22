package com.valiha.users.core.interfaces.factory;

import com.valiha.users.core.entities.model.User;

public interface UserFactory {
  User create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email,
    String password
  );
}
