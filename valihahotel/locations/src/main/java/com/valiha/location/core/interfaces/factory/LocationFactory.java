package com.valiha.location.core.interfaces.factory;

import com.valiha.location.core.entities.models.Car;
import com.valiha.location.core.entities.models.Client;
import com.valiha.location.core.entities.models.Location;
import com.valiha.location.core.entities.models.Payment;
import java.util.Date;

public interface LocationFactory {
  Location create(
    String id,
    String state,
    Date start,
    Date end,
    String destination,
    String reason,
    Client client,
    Car car,
    Payment payment
  );
}
