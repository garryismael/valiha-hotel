package com.valiha.users.infrastructure.repository;

import com.valiha.users.infrastructure.data.ClientDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoClientRepository
  extends MongoRepository<ClientDataMapper, String> {}
