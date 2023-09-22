package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.service.ClientService;
import com.valiha.reservation.infrastructure.repository.ApiClientRepository;

public class ClientServiceImpl implements ClientService {

  private final ApiClientRepository clientRepository;

  public ClientServiceImpl(ApiClientRepository clientRepository) {
    this.clientRepository = clientRepository;
  }

  @Override
  public ClientResponseDto create(ClientRequestDto dto) {
    return this.clientRepository.create(dto);
  }
}
