package com.valiha.reservation.application.interactors.category;

import com.valiha.reservation.application.dto.category.CategoryRequestDto;
import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.CategoryRepository;
import com.valiha.reservation.application.service.StorageService;
import com.valiha.reservation.application.useCase.category.CategoryCreateUseCase;
import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.interfaces.factory.CategoryFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateCategoryInteractor implements CategoryCreateUseCase {

  private final CategoryFactory categoryFactory;
  private final CategoryRepository categoryRepository;
  private final GenericPresenter<CategoryResponseDto> categoryPresenter;
  private final StorageService storageService;

  @Override
  public CategoryResponseDto execute(CategoryRequestDto requestDto, File file) {
    Map<String, String> errors = new HashMap<>();
    String image = null;

    try {
      image = this.storageService.upload(file, "blogs");
    } catch (IOException exception) {
      errors.put(CategoryValidator.KEY_IMAGE, CategoryValidator.UPLOAD_ERROR);
    }

    Category category =
      this.categoryFactory.create(
          null,
          requestDto.getTitle(),
          requestDto.getType(),
          requestDto.getPax(),
          requestDto.getBigBed(),
          requestDto.getSmallBed(),
          image
        );

    errors.putAll(category.validate());

    if (!errors.isEmpty()) {
      return this.categoryPresenter.prepareInvalidDataView(
          CategoryValidator.INVALID_CATEGORY_DATA_MESSAGE,
          errors
        );
    }
    category = this.categoryRepository.save(category);
    return this.categoryPresenter.prepareSuccessView(
        CategoryResponseDto.from(category)
      );
  }
}
