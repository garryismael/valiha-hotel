package com.valiha.location.application.useCase.car;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import java.io.File;

public interface RegisterCarUseCase {
  CarResponseDto execute(CarRequestDto requestDto, File file);
}
