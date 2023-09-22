package com.valiha.users.application.useCase.client;

import com.valiha.users.application.dto.client.ClientRequestDto;
import com.valiha.users.application.dto.client.ClientResponseDto;

public interface RegisterClientUseCase {
  ClientResponseDto execute(ClientRequestDto requestDto);
}
