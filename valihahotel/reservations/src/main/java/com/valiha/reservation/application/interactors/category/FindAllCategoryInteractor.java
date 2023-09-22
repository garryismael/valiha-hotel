package com.valiha.reservation.application.interactors.category;

import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.useCase.category.CategoryFindAllUseCase;
import com.valiha.reservation.core.entities.models.Category;
import java.util.List;

public class FindAllCategoryInteractor implements CategoryFindAllUseCase {

  private final GenericRepository<Category> categoryRepository;
  private final GenericPresenter<CategoryResponseDto> categoryPresenter;

  public FindAllCategoryInteractor(
    GenericRepository<Category> categoryRepository,
    GenericPresenter<CategoryResponseDto> categoryPresenter
  ) {
    this.categoryRepository = categoryRepository;
    this.categoryPresenter = categoryPresenter;
  }

  @Override
  public List<CategoryResponseDto> execute() {
    List<Category> categories = this.categoryRepository.findAll();
    return categoryPresenter.prepareSuccessView(
      CategoryResponseDto.from(categories)
    );
  }
}
