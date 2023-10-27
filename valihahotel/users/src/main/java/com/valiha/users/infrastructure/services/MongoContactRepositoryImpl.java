package com.valiha.users.infrastructure.services;

import com.valiha.users.application.repository.ContactRepository;
import com.valiha.users.core.entities.model.Contact;
import com.valiha.users.infrastructure.data.ContactDataMapper;
import com.valiha.users.infrastructure.repository.MongoContactRepository;
import java.util.List;
import java.util.Optional;

public class MongoContactRepositoryImpl implements ContactRepository {

  private final MongoContactRepository contactRepository;

  public MongoContactRepositoryImpl(MongoContactRepository contactRepository) {
    this.contactRepository = contactRepository;
  }

  @Override
  public Contact save(Contact contact) {
    ContactDataMapper dataMapper = ContactDataMapper.from(contact);
    dataMapper = this.contactRepository.save(dataMapper);
    return toContact(dataMapper);
  }

  @Override
  public Contact findOneById(String id) {
    Optional<ContactDataMapper> optionalDataMapper =
      this.contactRepository.findById(id);

    return optionalDataMapper.isPresent()
      ? toContact(optionalDataMapper.get())
      : null;
  }

  @Override
  public List<Contact> findAll() {
    List<ContactDataMapper> dataMappers = this.contactRepository.findAll();
    return dataMappers
      .stream()
      .map(MongoContactRepositoryImpl::toContact)
      .toList();
  }

  @Override
  public void deleteById(String id) {
    this.contactRepository.deleteById(id);
  }

  public static Contact toContact(ContactDataMapper dataMapper) {
    return Contact
      .builder()
      .id(dataMapper.getId())
      .subject(dataMapper.getSubject())
      .message(dataMapper.getMessage())
      .client(MongoClientRepositoryImpl.toClient(dataMapper.getClient()))
      .build();
  }
}
