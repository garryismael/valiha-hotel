package com.valiha.users.application.repository;

import com.valiha.users.core.entities.model.Contact;
import java.util.List;

public interface ContactRepository {
  Contact save(Contact contact);

  Contact findOneById(String id);

  List<Contact> findAll();

  void deleteById(String id);
}
