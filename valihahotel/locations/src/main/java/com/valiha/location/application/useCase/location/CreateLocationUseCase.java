package com.valiha.location.application.useCase.location;

import com.valiha.location.application.dto.location.LocationRequestDto;
import com.valiha.location.application.dto.location.LocationResponseDto;

public interface CreateLocationUseCase {
  LocationResponseDto execute(LocationRequestDto requestDto);
}
