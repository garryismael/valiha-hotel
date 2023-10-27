package com.valiha.reservation.application.service;

import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;

public interface NotificationService {
  void execute(ReservationResponseDto responseDto);
}
