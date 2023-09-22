package com.valiha.users.infrastructure.services;

import com.valiha.users.application.repository.GenericRepository;
import com.valiha.users.core.entities.model.Client;
import com.valiha.users.infrastructure.data.ClientDataMapper;
import com.valiha.users.infrastructure.repository.MongoClientRepository;
import java.util.List;
import java.util.Optional;

public class MongoClientRepositoryImpl implements GenericRepository<Client> {

  private final MongoClientRepository clientRepository;

  public MongoClientRepositoryImpl(MongoClientRepository clientRepository) {
    this.clientRepository = clientRepository;
  }

  @Override
  public Client save(Client entity) {
    ClientDataMapper dataMapper = ClientDataMapper.from(entity);
    dataMapper = this.clientRepository.save(dataMapper);
    return toClient(dataMapper);
  }

  @Override
  public Client update(String id, Client entity) {
    ClientDataMapper dataMapper = ClientDataMapper.from(entity);
    dataMapper = this.clientRepository.save(dataMapper);
    return toClient(dataMapper);
  }

  @Override
  public Client findOneById(String id) {
    Optional<ClientDataMapper> optionalDataMapper =
      this.clientRepository.findById(id);
    return optionalDataMapper.isPresent()
      ? toClient(optionalDataMapper.get())
      : null;
  }

  @Override
  public List<Client> findAll() {
    List<ClientDataMapper> dataMappers = this.clientRepository.findAll();
    return dataMappers
      .stream()
      .map(MongoClientRepositoryImpl::toClient)
      .toList();
  }

  @Override
  public void deleteById(String id) {
    this.clientRepository.deleteById(id);
  }

  public static Client toClient(ClientDataMapper dataMapper) {
    return Client
      .builder()
      .id(dataMapper.getId())
      .firstName(dataMapper.getFirstName())
      .lastName(dataMapper.getLastName())
      .phoneNumber(dataMapper.getPhoneNumber())
      .email(dataMapper.getEmail())
      .build();
  }
}
