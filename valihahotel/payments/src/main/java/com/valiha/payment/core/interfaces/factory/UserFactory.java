package com.valiha.payment.core.interfaces.factory;

import com.valiha.payment.core.entities.models.User;

public interface UserFactory {
  User create(
    String id,
    String firstName,
    String lastName,
    String phoneNumber,
    String email,
    String image
  );
}
