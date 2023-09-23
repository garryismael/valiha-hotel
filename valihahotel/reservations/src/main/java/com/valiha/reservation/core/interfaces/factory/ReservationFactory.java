package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import java.util.Date;

public interface ReservationFactory {
  Reservation create(
    String id,
    Date checkIn,
    Date checkOut,
    String state,
    boolean useParking,
    Room room,
    Client client,
    Payment payment
  );
}
