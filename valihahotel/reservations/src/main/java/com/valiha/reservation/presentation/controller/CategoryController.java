package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryFindAllUseCase;
import com.valiha.reservation.application.useCase.category.CategoryGetUseCase;
import com.valiha.reservation.application.useCase.category.CategoryRemoveUseCase;
import com.valiha.reservation.infrastructure.service.ReservationService;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
  public CategoryResponseDto createCategory(
    CategoryRequestDto dto,
    @RequestParam("image") MultipartFile multipartFile
  ) {
    return this.reservationService.create(dto, multipartFile);
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
  public CategoryResponseDto editCategory(
    @PathVariable("id") String id,
    CategoryRequestDto requestDto,
    @RequestParam(name = "image", required = false) MultipartFile multipartFile
  ) {
    return this.reservationService.update(id, requestDto, multipartFile);
  }

  @DeleteMapping("/{id}")
  public void deleteCategory(@PathVariable("id") String id) {
    this.removeUseCase.execute(id);
  }
}
