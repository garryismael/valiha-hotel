package com.valiha.location.application.useCase.car;

import com.valiha.location.application.dto.car.CarResponseDto;
import java.util.List;

public interface FindAllCarsUseCase {
  List<CarResponseDto> execute();
}
