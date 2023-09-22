package com.valiha.users.infrastructure.repository;

import com.valiha.users.infrastructure.data.ContactDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoContactRepository
  extends MongoRepository<ContactDataMapper, String> {}
