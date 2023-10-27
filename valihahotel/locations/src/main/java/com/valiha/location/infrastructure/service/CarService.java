package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.useCase.car.EditCarUseCase;
import com.valiha.location.application.useCase.car.RegisterCarUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
public class CarService {

  private final RegisterCarUseCase createUseCase;
  private final EditCarUseCase editUseCase;

  public CarResponseDto create(
    CarRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return createUseCase.execute(
      requestDto,
      StorageServiceImpl.convertToFile(multipartFile)
    );
  }

  public CarResponseDto edit(
    String id,
    CarRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return editUseCase.execute(
      id,
      requestDto,
      multipartFile == null || multipartFile.isEmpty()
        ? null
        : StorageServiceImpl.convertToFile(multipartFile)
    );
  }
}
