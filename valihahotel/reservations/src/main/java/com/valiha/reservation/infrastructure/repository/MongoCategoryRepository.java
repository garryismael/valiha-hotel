package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.CategoryDataMapper;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoCategoryRepository
  extends MongoRepository<CategoryDataMapper, String> {
  Optional<CategoryDataMapper> findOneByTypeAndAdultGreaterThanEqualAndKidGreaterThanEqual(
    String type,
    int adult,
    int kid
  );
}
