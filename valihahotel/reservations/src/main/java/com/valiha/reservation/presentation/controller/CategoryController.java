package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryFindAllUseCase;
import com.valiha.reservation.application.useCase.category.CategoryGetUseCase;
import com.valiha.reservation.application.useCase.category.CategoryRemoveUseCase;
import com.valiha.reservation.infrastructure.service.ReservationService;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/categories")
public class CategoryController {

  private final ReservationService reservationService;
  private final CategoryFindAllUseCase findAllUseCase;
  private final CategoryGetUseCase getUseCase;
  private final CategoryRemoveUseCase removeUseCase;

  public CategoryController(
    ReservationService reservationService,
    CategoryFindAllUseCase findAllUseCase,
    CategoryGetUseCase getUseCase,
    CategoryRemoveUseCase removeUseCase
  ) {
    this.reservationService = reservationService;
    this.findAllUseCase = findAllUseCase;
    this.getUseCase = getUseCase;
    this.removeUseCase = removeUseCase;
  }

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Mono<CategoryResponseDto> createCategory(
    CategoryRequestDto dto,
    @RequestPart("image") Mono<FilePart> file
  ) {
    return this.reservationService.create(dto, file);
  }

  @GetMapping
  public List<CategoryResponseDto> getCategories() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public CategoryResponseDto getCategory(@PathVariable("id") String id) {
    return this.getUseCase.execute(id);
  }

  @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public Mono<CategoryResponseDto> editCategory(
    @PathVariable("id") String id,
    CategoryRequestDto requestDto,
    @RequestPart(name = "image", required = false) Mono<FilePart> image
  ) {
    return this.reservationService.update(id, requestDto, image);
  }

  @DeleteMapping("/{id}")
  public void deleteCategory(@PathVariable("id") String id) {
    this.removeUseCase.execute(id);
  }
}
