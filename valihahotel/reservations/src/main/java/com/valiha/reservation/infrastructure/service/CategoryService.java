package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryCreateUseCase;
import com.valiha.reservation.application.useCase.category.CategoryEditUseCase;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class CategoryService {

  private final CategoryCreateUseCase createUseCase;
  private final CategoryEditUseCase editUseCase;

  public CategoryService(
    CategoryCreateUseCase createUseCase,
    CategoryEditUseCase editUseCase
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
  }

  public Mono<CategoryResponseDto> createCategory(
    CategoryRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file -> Mono.just(createUseCase.execute(requestDto, file)));
  }

  public Mono<CategoryResponseDto> update(
    String id,
    CategoryRequestDto requestDto,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> StorageServiceImpl.convertToMonoFile(fp))
      .flatMap(file -> Mono.just(editUseCase.execute(id, requestDto, file)))
      .switchIfEmpty(Mono.just(editUseCase.execute(id, requestDto, null)));
  }
}
