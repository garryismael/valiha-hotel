package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.service.GenericService;
import com.valiha.reservation.infrastructure.repository.ApiClientService;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ClientServiceImpl
  implements GenericService<ClientResponseDto, ClientRequestDto> {

  private final ApiClientService clientService;

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
