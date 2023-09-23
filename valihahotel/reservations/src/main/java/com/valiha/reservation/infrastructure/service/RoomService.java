package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.useCase.room.RoomCreateUseCase;
import com.valiha.reservation.application.useCase.room.RoomEditUseCase;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class RoomService {

  private final RoomCreateUseCase createUseCase;
  private final RoomEditUseCase editUseCase;

  public RoomService(
    RoomCreateUseCase createUseCase,
    RoomEditUseCase editUseCase
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
  }

  public Mono<RoomResponseDto> create(
    RoomRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file -> Mono.just(createUseCase.execute(requestDto, file)));
  }

  public Mono<RoomResponseDto> update(
    String id,
    RoomRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file -> Mono.just(editUseCase.execute(id, requestDto, file)))
      .switchIfEmpty(Mono.just(editUseCase.execute(id, requestDto, null)));
  }
}
