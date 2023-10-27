package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.client.ClientRequestDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import com.valiha.location.application.service.GenericService;
import java.util.List;

public class ClientServiceImpl
  implements GenericService<ClientResponseDto, ClientRequestDto> {

  private final ApiClientService clientService;

  public ClientServiceImpl(ApiClientService clientService) {
    this.clientService = clientService;
  }

  @Override
  public ClientResponseDto create(ClientRequestDto requestDto) {
    return clientService.create(requestDto);
  }

  @Override
  public List<ClientResponseDto> findAllByIds(List<String> ids) {
    return clientService.findAllByIds(ids);
  }

  @Override
  public ClientResponseDto findOneById(String id) {
    return clientService.findOneById(id);
  }
}
