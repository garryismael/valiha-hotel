package com.valiha.users.application.repository;

import com.valiha.users.core.entities.model.Client;
import java.util.List;

public interface ClientRepository {
  Client save(Client client);

  Client update(String id, Client client);

  Client findOneById(String id);

  List<Client> findAll();

  List<Client> findAllByIds(List<String> ids);

  void deleteById(String id);
}
