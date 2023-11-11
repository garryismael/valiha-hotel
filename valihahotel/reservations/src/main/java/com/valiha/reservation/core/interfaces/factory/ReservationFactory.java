package com.valiha.reservation.core.interfaces.factory;

import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.entities.models.Client;
import com.valiha.reservation.core.entities.models.Payment;
import com.valiha.reservation.core.entities.models.Reservation;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.entities.models.Shuttle;
import java.util.Date;
import java.util.List;

public interface ReservationFactory {
  Reservation create(
    String id,
    Date checkIn,
    Date checkOut,
    String state,
    boolean useParking,
    int pax,
    Client client,
    Payment payment,
    List<Room> rooms,
    List<Shuttle> shuttles,
    List<Breakfast> breakfasts
  );
}
