package com.valiha.location.infrastructure.service;

import com.valiha.location.application.dto.car.CarRequestDto;
import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.useCase.car.EditCarUseCase;
import com.valiha.location.application.useCase.car.RegisterCarUseCase;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.RequestPart;
import reactor.core.publisher.Mono;

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

  public Mono<CarResponseDto> create(
    CarRequestDto requestDto,
    @RequestPart Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(this::convertFilePartToFile)
      .flatMap(file -> Mono.just(createUseCase.execute(requestDto, file)));
  }

  public Mono<CarResponseDto> edit(
    String id,
    CarRequestDto requestDto,
    @RequestPart Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(this::convertFilePartToFile)
      .flatMap(file -> Mono.just(editUseCase.execute(id, requestDto, file)))
      .switchIfEmpty(Mono.just(editUseCase.execute(id, requestDto, null)));
  }

  private Mono<File> convertFilePartToFile(FilePart filePart) {
    try {
      // Create a temporary file
      File tempFile = File.createTempFile("upload-", "-" + filePart.filename());

      // Copy the content of the FilePart to the temporary file
      Path tempFilePath = tempFile.toPath();
      return filePart.transferTo(tempFilePath).thenReturn(tempFile);
    } catch (IOException e) {
      return Mono.error(e);
    }
  }
}
