package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.CategoryRepository;
import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.infrastructure.data.CategoryDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoCategoryRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CategoryRepositoryImpl implements CategoryRepository {

  private final MongoCategoryRepository categoryRepository;

  @Override
  public Category save(Category category) {
    var dataMapper = CategoryDataMapper.from(category);
    dataMapper = this.categoryRepository.save(dataMapper);
    return CategoryDataMapper.toCategory(dataMapper);
  }

  @Override
  public List<Category> findAll() {
    var listOfDataMappers = this.categoryRepository.findAll();
    return CategoryDataMapper.toCategoryList(listOfDataMappers);
  }

  @Override
  public Category findOneById(String id) {
    var dataMapper = this.categoryRepository.findById(id);
    if (dataMapper.isPresent()) {
      return CategoryDataMapper.toCategory(dataMapper.get());
    }
    return null;
  }

  @Override
  public Category update(String id, Category category) {
    var dataMapper = CategoryDataMapper.from(category);
    dataMapper = this.categoryRepository.save(dataMapper);
    return CategoryDataMapper.toCategory(dataMapper);
  }

  @Override
  public void deleteById(String id) {
    this.categoryRepository.deleteById(id);
  }

  @Override
  public Category findOneByType(String type) {
    Optional<CategoryDataMapper> optionalDataMapper =
      this.categoryRepository.findOneByType(type);
    return optionalDataMapper.isPresent()
      ? CategoryDataMapper.toCategory(optionalDataMapper.get())
      : null;
  }
}
