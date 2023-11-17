package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.reservation.ReservationResponseDto;
import com.valiha.reservation.application.service.NotificationService;
import com.valiha.reservation.infrastructure.repository.ApiNotification;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NotificationServiceImpl implements NotificationService {

  private final ApiNotification apiNotification;

  @Override
  public void execute(ReservationResponseDto responseDto) {
    this.apiNotification.notifyReservation(responseDto);
  }
}
