package com.valiha.location.application.useCase.location;

import com.valiha.location.application.dto.location.LocationResponseDto;

public interface FindOneLocationUseCase {
  LocationResponseDto execute(String id);
}
