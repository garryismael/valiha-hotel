package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryCreateUseCase;
import com.valiha.reservation.application.useCase.category.CategoryEditUseCase;
import com.valiha.reservation.application.useCase.room.RoomCreateUseCase;
import com.valiha.reservation.application.useCase.room.RoomEditUseCase;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class ReservationService {

  private final RoomCreateUseCase roomCreateUseCase;
  private final RoomEditUseCase roomEditUseCase;
  private final CategoryCreateUseCase categoryCreateUseCase;
  private final CategoryEditUseCase categoryEditUseCase;

  public ReservationService(
    RoomCreateUseCase roomCreateUseCase,
    RoomEditUseCase roomEditUseCase,
    CategoryCreateUseCase categoryCreateUseCase,
    CategoryEditUseCase categoryEditUseCase
  ) {
    this.roomCreateUseCase = roomCreateUseCase;
    this.roomEditUseCase = roomEditUseCase;
    this.categoryCreateUseCase = categoryCreateUseCase;
    this.categoryEditUseCase = categoryEditUseCase;
  }

  public Mono<RoomResponseDto> create(
    RoomRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file -> Mono.just(roomCreateUseCase.execute(requestDto, file)));
  }

  public Mono<CategoryResponseDto> create(
    CategoryRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file ->
        Mono.just(categoryCreateUseCase.execute(requestDto, file))
      );
  }

  public Mono<RoomResponseDto> update(
    String id,
    RoomRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file -> Mono.just(roomEditUseCase.execute(id, requestDto, file)))
      .switchIfEmpty(Mono.just(roomEditUseCase.execute(id, requestDto, null)));
  }

  public Mono<CategoryResponseDto> update(
    String id,
    CategoryRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file ->
        Mono.just(categoryEditUseCase.execute(id, requestDto, file))
      )
      .switchIfEmpty(
        Mono.just(categoryEditUseCase.execute(id, requestDto, null))
      );
  }
}
