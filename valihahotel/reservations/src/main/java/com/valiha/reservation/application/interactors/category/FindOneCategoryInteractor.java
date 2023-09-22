package com.valiha.reservation.application.interactors.category;

import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.useCase.category.CategoryGetUseCase;
import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.entities.models.Category;
import java.util.HashMap;
import java.util.Map;

public class FindOneCategoryInteractor implements CategoryGetUseCase {

  private final GenericRepository<Category> categoryRepository;
  private final GenericPresenter<CategoryResponseDto> categoryPresenter;

  public FindOneCategoryInteractor(
    GenericRepository<Category> categoryRepository,
    GenericPresenter<CategoryResponseDto> categoryPresenter
  ) {
    this.categoryRepository = categoryRepository;
    this.categoryPresenter = categoryPresenter;
  }

  @Override
  public CategoryResponseDto execute(String id) {
    Category category = this.categoryRepository.findOneById(id);

    if (category == null) {
      Map<String, String> errors = new HashMap<String, String>();
      errors.put(
        CategoryValidator.KEY_ID,
        String.format(CategoryValidator.CATEGORY_ID_NOT_FOUND, id)
      );

      return this.categoryPresenter.prepareResourceNotFoundView(
          CategoryValidator.CATEGORY_NOT_FOUND_MESSAGE,
          errors
        );
    }

    return this.categoryPresenter.prepareSuccessView(
        CategoryResponseDto.from(category)
      );
  }
}
