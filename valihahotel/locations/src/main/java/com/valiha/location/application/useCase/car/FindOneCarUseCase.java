package com.valiha.location.application.useCase.car;

import com.valiha.location.application.dto.car.CarResponseDto;

public interface FindOneCarUseCase {
  CarResponseDto execute(String id);
}
