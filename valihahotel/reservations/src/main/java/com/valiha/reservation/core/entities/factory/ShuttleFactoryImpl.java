package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.core.interfaces.factory.ShuttleFactory;
import java.time.LocalDateTime;

public class ShuttleFactoryImpl implements ShuttleFactory {

  @Override
  public Shuttle create(
    String id,
    String flightName,
    String flightNumber,
    LocalDateTime arrivalDate,
    String destination,
    String state
  ) {
    return Shuttle
      .builder()
      .id(id)
      .flightName(flightName)
      .flightNumber(flightNumber)
      .date(arrivalDate)
      .destination(destination)
      .state(state)
      .build();
  }
}
