package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Shuttle;
import java.time.LocalDateTime;

public interface ShuttleFactory {
  Shuttle create(
    String id,
    String flightName,
    String flightNumber,
    LocalDateTime arrivalDate,
    String destination
  );
}
