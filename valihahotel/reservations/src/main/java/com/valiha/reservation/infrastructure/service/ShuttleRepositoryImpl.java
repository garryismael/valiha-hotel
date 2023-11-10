package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.repository.ShuttleRepository;
import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.infrastructure.data.ShuttleDataMapper;
import com.valiha.reservation.infrastructure.repository.MongoShuttleRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ShuttleRepositoryImpl implements ShuttleRepository {

  private final MongoShuttleRepository shuttleRepository;

  @Override
  public Shuttle create(Shuttle shuttle) {
    ShuttleDataMapper dataMapper = ShuttleDataMapper.from(shuttle);
    dataMapper = this.shuttleRepository.save(dataMapper);
    return ShuttleDataMapper.cast(dataMapper);
  }

  @Override
  public Shuttle edit(String id, Shuttle shuttle) {
    ShuttleDataMapper dataMapper = ShuttleDataMapper.from(shuttle);
    dataMapper = this.shuttleRepository.save(dataMapper);
    return ShuttleDataMapper.cast(dataMapper);
  }

  @Override
  public void delete(String id) {
    this.shuttleRepository.deleteById(id);
  }
}
