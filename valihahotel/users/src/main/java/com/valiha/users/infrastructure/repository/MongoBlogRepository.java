package com.valiha.users.infrastructure.repository;

import com.valiha.users.infrastructure.data.BlogDataMapper;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoBlogRepository
  extends MongoRepository<BlogDataMapper, String> {}
