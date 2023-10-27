package com.valiha.reservation.core.entities.factory;

import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.core.interfaces.factory.ReservationFactory;
import java.util.Date;
import java.util.List;

public class ReservationFactoryImpl implements ReservationFactory {

  @Override
  public Reservation create(
    String id,
    Date checkIn,
    Date checkOut,
    String state,
    boolean useParking,
    Client client,
    Payment payment,
    List<Room> room,
    List<Shuttle> shuttles,
    List<Breakfast> breakfasts
  ) {
    return Reservation
      .builder()
      .id(id)
      .checkIn(checkIn)
      .checkOut(checkOut)
      .state(state)
      .parking(useParking)
      .client(client)
      .payment(payment)
      .rooms(room)
      .shuttles(shuttles)
      .breakfasts(breakfasts)
      .build();
  }
}
