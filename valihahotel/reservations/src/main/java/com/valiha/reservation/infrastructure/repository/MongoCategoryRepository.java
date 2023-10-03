package com.valiha.reservation.infrastructure.repository;

import com.valiha.reservation.infrastructure.data.CategoryDataMapper;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoCategoryRepository
  extends MongoRepository<CategoryDataMapper, String> {
  List<CategoryDataMapper> findByAdultGreaterThanEqualAndKidGreaterThanEqual(
    int adult,
    int kid
  );
}
