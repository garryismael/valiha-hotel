package com.valiha.location.application.repository;

import com.valiha.location.core.entities.models.Location;
import java.util.Date;
import java.util.List;

public interface LocationRepository {
  Location save(Location entity);

  Location update(String id, Location entity);

  Location findOneById(String id);

  List<Location> findAll();

  List<Location> findLocationsWithinDateRange(Date checkIn, Date checkOut);

  void deleteById(String id);
}
