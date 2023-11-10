package com.valiha.reservation.application.interactors.shuttle;

import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ShuttleRepository;
import com.valiha.reservation.application.useCase.shuttle.DeleteShuttleUseCase;
import com.valiha.reservation.core.constant.BreakfastValidator;
import com.valiha.reservation.core.entities.models.Shuttle;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DeleteShuttleInteractor implements DeleteShuttleUseCase {

  private final ShuttleRepository shuttleRepository;
  private final GenericPresenter<ShuttleResponseDto> shuttlePresenter;

  @Override
  public void execute(String id) {
    Map<String, String> errors = new HashMap<>();
    Shuttle breakfast = this.shuttleRepository.findById(id);

    if (breakfast == null) {
      this.shuttlePresenter.prepareResourceNotFoundView(
          BreakfastValidator.BREAKFAST_NOT_FOUND_MESSAGE,
          errors
        );
    }

    this.shuttleRepository.delete(id);
  }
}
