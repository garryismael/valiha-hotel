package com.valiha.reservation.infrastructure.service;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryCreateUseCase;
import com.valiha.reservation.application.useCase.category.CategoryEditUseCase;
import java.io.File;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public class CategoryService {

  private final CategoryCreateUseCase createUseCase;
  private final UploadService uploadService;
  private final CategoryEditUseCase editUseCase;

  public CategoryService(
    CategoryCreateUseCase createUseCase,
    CategoryEditUseCase editUseCase,
    UploadService uploadService
  ) {
    this.createUseCase = createUseCase;
    this.editUseCase = editUseCase;
    this.uploadService = uploadService;
  }

  public Mono<CategoryResponseDto> setup(
    CategoryRequestDto dto,
    Mono<FilePart> fileMono
  ) {
    return fileMono.flatMap(fp -> {
      Mono<String> absolutePath = this.uploadService.upload(fp);
      return absolutePath.flatMap(path -> {
        File file = new File(path);
        return Mono.just(createUseCase.execute(dto, file));
      });
    });
  }

  public Mono<CategoryResponseDto> update(
    String id,
    CategoryRequestDto requestModel,
    Mono<FilePart> filePartMono
  ) {
    return filePartMono
      .flatMap(fp -> {
        Mono<String> absolutePath = uploadService.upload(fp);
        return absolutePath.flatMap(path -> {
          File file = new File(path);
          return Mono.just(editUseCase.execute(id, requestModel, file));
        });
      })
      .switchIfEmpty(Mono.just(editUseCase.execute(id, requestModel, null)));
  }
}
