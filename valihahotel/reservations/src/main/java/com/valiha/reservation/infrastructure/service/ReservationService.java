package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryCreateUseCase;
import com.valiha.reservation.application.useCase.category.CategoryEditUseCase;
import com.valiha.reservation.application.useCase.room.RoomCreateUseCase;
import com.valiha.reservation.application.useCase.room.RoomEditUseCase;
import lombok.AllArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
public class ReservationService {

  private final RoomCreateUseCase roomCreateUseCase;
  private final RoomEditUseCase roomEditUseCase;
  private final CategoryCreateUseCase categoryCreateUseCase;
  private final CategoryEditUseCase categoryEditUseCase;

  public RoomResponseDto create(
    RoomRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return roomCreateUseCase.execute(
      requestDto,
      StorageServiceImpl.convertToFile(multipartFile)
    );
  }

  public CategoryResponseDto create(
    CategoryRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return categoryCreateUseCase.execute(
      requestDto,
      StorageServiceImpl.convertToFile(multipartFile)
    );
  }

  public RoomResponseDto update(
    String id,
    RoomRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return roomEditUseCase.execute(
      id,
      requestDto,
      multipartFile == null || multipartFile.isEmpty()
        ? null
        : StorageServiceImpl.convertToFile(multipartFile)
    );
  }

  public CategoryResponseDto update(
    String id,
    CategoryRequestDto requestDto,
    MultipartFile multipartFile
  ) {
    return categoryEditUseCase.execute(
      id,
      requestDto,
      multipartFile == null || multipartFile.isEmpty()
        ? null
        : StorageServiceImpl.convertToFile(multipartFile)
    );
  }
}
