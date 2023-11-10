package com.valiha.reservation.application.interactors.breakfast;

import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.BreakfastRepository;
import com.valiha.reservation.application.useCase.breakfast.DeleteBreakfastUseCase;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.entities.models.Breakfast;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteBreakfastInteractor implements DeleteBreakfastUseCase {

  private final BreakfastRepository breakfastRepository;
  private final GenericPresenter<BreakfastResponseDto> breakfastPresenter;

  @Override
  public void execute(String id) {
    Map<String, String> errors = new HashMap<>();
    Breakfast breakfast = this.breakfastRepository.findById(id);

    if (breakfast == null) {
      this.breakfastPresenter.prepareResourceNotFoundView(
          BreakfastValidator.BREAKFAST_NOT_FOUND_MESSAGE,
          errors
        );
    }

    this.breakfastRepository.delete(id);
  }
}
