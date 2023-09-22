package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.useCase.room.RoomCreateUseCase;
import com.valiha.reservation.application.useCase.room.RoomEditUseCase;
import java.io.File;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class RoomService {

  private final RoomCreateUseCase createUseCase;
  private final RoomEditUseCase editUseCase;
  private final UploadService uploadService;

  public RoomService(
    RoomCreateUseCase createUseCase,
    RoomEditUseCase editUseCase,
    UploadService uploadService
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
    this.uploadService = uploadService;
  }

  public Mono<RoomResponseDto> create(
    RoomRequestDto dto,
    Mono<FilePart> monoFilePart
  ) {
    return monoFilePart.flatMap(fp -> {
      Mono<String> absolutePath = this.uploadService.upload(fp);
      return absolutePath.flatMap(path -> {
        File file = new File(path);
        return Mono.just(createUseCase.execute(dto, file));
      });
    });
  }

  public Mono<RoomResponseDto> update(
    String id,
    RoomRequestDto dto,
    Mono<FilePart> monoFilePart
  ) {
    return monoFilePart
      .flatMap(fp -> {
        Mono<String> absolutePath = uploadService.upload(fp);
        return absolutePath.flatMap(path -> {
          File file = new File(path);
          return Mono.just(editUseCase.execute(id, dto, file));
        });
      })
      .switchIfEmpty(Mono.just(editUseCase.execute(id, dto, null)));
  }
}
