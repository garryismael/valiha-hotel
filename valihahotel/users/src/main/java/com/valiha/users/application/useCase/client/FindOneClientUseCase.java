package com.valiha.users.application.useCase.client;

import com.valiha.users.application.dto.client.ClientResponseDto;

public interface FindOneClientUseCase {
  ClientResponseDto execute(String id);
}
