package com.valiha.users.application.repository;

import com.valiha.users.core.entities.model.User;
import java.util.List;

public interface UserRepository {
  User save(User user);

  User update(String id, User entity);

  User findOneById(String id);

  List<User> findAll();

  void deleteById(String id);

  User findOneByEmail(String email);

  List<User> findAllByIds(List<String> ids);
}
