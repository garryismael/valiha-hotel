package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.location.LocationResponseDto;
import com.valiha.location.application.service.NotificationService;
import com.valiha.location.infrastructure.repository.ApiNotification;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NotificationServiceImpl implements NotificationService {

  private final ApiNotification apiNotification;

  @Override
  public void execute(LocationResponseDto responseDto) {
    this.apiNotification.notifyReservation(responseDto);
  }
}
