package com.valiha.reservation.presentation.controller;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.useCase.category.CategoryFindAllUseCase;
import com.valiha.reservation.application.useCase.category.CategoryGetUseCase;
import com.valiha.reservation.application.useCase.category.CategoryRemoveUseCase;
import com.valiha.reservation.infrastructure.service.CategoryService;
import java.util.List;
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

  private final CategoryService categoryService;
  private final CategoryFindAllUseCase findAllUseCase;
  private final CategoryGetUseCase getUseCase;
  private final CategoryRemoveUseCase removeUseCase;

  public CategoryController(
    CategoryService categoryService,
    CategoryFindAllUseCase findAllUseCase,
    CategoryGetUseCase getUseCase,
    CategoryRemoveUseCase removeUseCase
  ) {
    this.categoryService = categoryService;
    this.findAllUseCase = findAllUseCase;
    this.getUseCase = getUseCase;
    this.removeUseCase = removeUseCase;
  }

  @PostMapping
  public Mono<CategoryResponseDto> createCategory(
    CategoryRequestDto dto,
    @RequestPart("image") Mono<FilePart> file
  ) {
    return this.categoryService.setup(dto, file);
  }

  @GetMapping
  public List<CategoryResponseDto> getCategories() {
    return this.findAllUseCase.execute();
  }

  @GetMapping("/{id}")
  public CategoryResponseDto getCategory(@PathVariable("id") String id) {
    return this.getUseCase.execute(id);
  }

  @PutMapping("/{id}")
  public Mono<CategoryResponseDto> editCategory(
    @PathVariable("id") String id,
    CategoryRequestDto requestDto,
    @RequestPart(name = "image", required = false) Mono<FilePart> image
  ) {
    return this.categoryService.update(id, requestDto, image);
  }

  @DeleteMapping("/{id}")
  public void deleteCategory(@PathVariable("id") String id) {
    this.removeUseCase.execute(id);
  }
}
