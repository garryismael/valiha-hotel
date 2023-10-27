package com.valiha.location.application.useCase.car;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import java.io.File;

public interface EditCarUseCase {
  CarResponseDto execute(String id, CarRequestDto requestDto, File file);
}
