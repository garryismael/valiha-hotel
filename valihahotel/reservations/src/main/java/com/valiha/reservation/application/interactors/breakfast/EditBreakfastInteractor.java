package com.valiha.reservation.application.interactors.breakfast;

import com.valiha.reservation.application.dto.breakfast.BreakfastRequestDto;
import com.valiha.reservation.application.dto.breakfast.BreakfastResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.BreakfastRepository;
import com.valiha.reservation.application.useCase.breakfast.EditBreakfastUseCase;
import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.constant.ShuttleValidator;
import com.valiha.reservation.core.entities.models.Breakfast;
import com.valiha.reservation.core.interfaces.factory.BreakfastFactory;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditBreakfastInteractor implements EditBreakfastUseCase {

  private final BreakfastRepository breakfastRepository;
  private final GenericPresenter<BreakfastResponseDto> breakfastPresenter;
  private final BreakfastFactory breakfastFactory;

  @Override
  public BreakfastResponseDto execute(String id, BreakfastRequestDto dto) {
    Map<String, String> errors = new HashMap<>();
    Breakfast breakfast = this.breakfastRepository.findById(id);

    if (breakfast == null) {
      return this.breakfastPresenter.prepareResourceNotFoundView(
          BreakfastValidator.BREAKFAST_NOT_FOUND_MESSAGE,
          errors
        );
    }

    breakfast =
      this.breakfastFactory.create(
          id,
          DateFormatter.parseToDate(dto.getDate(), AppReservation.DATE_FORMAT),
          dto.getState()
        );

    errors = breakfast.validate();

    if (!errors.isEmpty()) {
      return this.breakfastPresenter.prepareInvalidDataView(
          ShuttleValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    breakfast = this.breakfastRepository.edit(id, breakfast);

    return this.breakfastPresenter.prepareSuccessView(
        BreakfastResponseDto.from(breakfast)
      );
  }
}
