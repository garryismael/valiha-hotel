package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.Date;

public class ReservationFactoryImpl implements ReservationFactory {

  @Override
  public Reservation create(
    String id,
    Date checkIn,
    Date checkOut,
    String state,
    boolean useParking,
    Room room,
    Client client,
    Payment payment
  ) {
    return Reservation
      .builder()
      .id(id)
      .checkIn(checkIn)
      .checkOut(checkOut)
      .state(state)
      .parking(useParking)
      .room(room)
      .client(client)
      .payment(payment)
      .build();
  }
}
