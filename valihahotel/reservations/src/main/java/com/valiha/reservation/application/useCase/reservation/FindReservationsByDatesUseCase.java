package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.core.entities.models.Reservation;
import java.util.Date;
import java.util.List;

public interface FindReservationsByDatesUseCase {
  List<Reservation> execute(Date checkIn, Date checkOut);
}
