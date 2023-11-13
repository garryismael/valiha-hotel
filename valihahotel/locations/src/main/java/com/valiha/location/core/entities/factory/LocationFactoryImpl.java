package com.valiha.location.core.entities.factory;

import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.entities.models.Client;
import com.valiha.location.core.entities.models.Location;
import com.valiha.location.core.entities.models.Payment;
import com.valiha.location.core.interfaces.factory.LocationFactory;
import java.util.Date;
import java.util.List;

public class LocationFactoryImpl implements LocationFactory {

  @Override
  public Location create(
    String id,
    String state,
    Date start,
    Date end,
    String destination,
    String reason,
    Client client,
    List<Car> cars,
    Payment payment
  ) {
    return Location
      .builder()
      .id(id)
      .state(state)
      .start(start)
      .end(end)
      .destination(destination)
      .reason(reason)
      .client(client)
      .cars(cars)
      .payment(payment)
      .build();
  }
}
