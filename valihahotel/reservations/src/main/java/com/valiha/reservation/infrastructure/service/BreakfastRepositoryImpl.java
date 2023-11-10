package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.BreakfastRepository;
import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.infrastructure.data.BreakfastDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoBreakfastRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class BreakfastRepositoryImpl implements BreakfastRepository {

  private final MongoBreakfastRepository breakfastRepository;

  @Override
  public Breakfast create(Breakfast breakfast) {
    BreakfastDataMapper dataMapper = BreakfastDataMapper.from(breakfast);
    dataMapper = this.breakfastRepository.save(dataMapper);

    return BreakfastDataMapper.cast(dataMapper);
  }

  @Override
  public Breakfast edit(String id, Breakfast breakfast) {
    BreakfastDataMapper dataMapper = BreakfastDataMapper.from(breakfast);
    dataMapper = this.breakfastRepository.save(dataMapper);
    return BreakfastDataMapper.cast(dataMapper);
  }

  @Override
  public void delete(String id) {
    this.breakfastRepository.deleteById(id);
  }
}
