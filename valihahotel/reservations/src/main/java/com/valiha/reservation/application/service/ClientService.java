package com.valiha.reservation.application.service;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.client.ClientResponseDto;

public interface ClientService {
  ClientResponseDto create(ClientRequestDto dto);
}
