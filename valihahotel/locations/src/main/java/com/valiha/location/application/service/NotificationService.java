package com.valiha.location.application.service;

import com.valiha.location.application.dto.location.LocationResponseDto;

public interface NotificationService {
  void execute(LocationResponseDto responseDto);
}
