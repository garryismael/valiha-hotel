package com.valiha.payment.application.repository;

import com.valiha.payment.core.entities.models.User;
import java.util.List;

public interface UserRepository {
  List<User> findAllByIds(List<String> ids);
  User findOneById(String id);
}
