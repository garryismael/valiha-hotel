package com.valiha.users.application.useCase.client;

import com.valiha.users.application.dto.client.ClientResponseDto;
import java.util.List;

public interface FindAllClientsUseCase {
  List<ClientResponseDto> execute();
}
