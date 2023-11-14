package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.BreakfastRepository;
import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.infrastructure.data.BreakfastDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoBreakfastRepository;
import java.util.List;
import java.util.Optional;
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

  @Override
  public Breakfast findById(String id) {
    Optional<BreakfastDataMapper> optional =
      this.breakfastRepository.findById(id);

    return optional.isPresent()
      ? BreakfastDataMapper.cast(optional.get())
      : null;
  }

  @Override
  public List<Breakfast> create(List<Breakfast> breakfasts) {
    List<BreakfastDataMapper> dataMappers = BreakfastDataMapper.from(
      breakfasts
    );
    dataMappers = this.breakfastRepository.insert(dataMappers);

    return BreakfastDataMapper.cast(dataMappers);
  }
}
