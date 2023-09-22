package com.valiha.reservation.application.useCase.reservation;

import com.valiha.reservation.core.entities.models.Reservation;
import java.util.List;

public interface GetReservationsUseCase {
  List<Reservation> execute();
}
