package com.valiha.location.application.service;

import com.valiha.location.application.dto.client.ClientRequestDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import java.util.List;

public interface ClientService {
  ClientResponseDto create(ClientRequestDto requestDto);
  List<ClientResponseDto> findAllByIds(List<String> ids);
}
