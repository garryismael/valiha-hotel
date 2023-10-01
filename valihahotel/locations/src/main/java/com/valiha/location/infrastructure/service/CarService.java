package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.useCase.car.EditCarUseCase;
import com.valiha.location.application.useCase.car.RegisterCarUseCase;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import org.springframework.web.multipart.MultipartFile;

public class CarService {

  private final RegisterCarUseCase createUseCase;
  private final EditCarUseCase editUseCase;

  public CarService(
    RegisterCarUseCase createUseCase,
    EditCarUseCase editUseCase
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
  }

  public CarResponseDto create(
    CarRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return createUseCase.execute(
      requestDto,
      convertFilePartToFile(multipartFile)
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
      convertFilePartToFile(multipartFile)
    );
  }

  private File convertFilePartToFile(MultipartFile multipartFile) {
    try {
      // Create a temporary file
      File tempFile = File.createTempFile(
        "upload-",
        "-" + multipartFile.getOriginalFilename()
      );

      // Copy the content of the FilePart to the temporary file
      Path tempFilePath = tempFile.toPath();
      multipartFile.transferTo(tempFilePath);
      return tempFile;
    } catch (IOException e) {
      return null;
    }
  }
}
