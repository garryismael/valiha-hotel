package com.valiha.reservation.application.interactors.shuttle;

import com.valiha.reservation.application.dto.shuttle.ShuttleRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.ShuttleRepository;
import com.valiha.reservation.application.useCase.shuttle.EditShuttleUseCase;
import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.constant.ShuttleValidator;
import com.valiha.reservation.core.entities.models.Shuttle;
import com.valiha.reservation.core.interfaces.factory.ShuttleFactory;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EditShuttleInteractor implements EditShuttleUseCase {

  private final ShuttleRepository shuttleRepository;
  private final GenericPresenter<ShuttleResponseDto> shuttlePresenter;
  private final ShuttleFactory shuttleFactory;

  @Override
  public ShuttleResponseDto execute(String id, ShuttleRequestDto dto) {
    Map<String, String> errors = new HashMap<>();
    Shuttle shuttle = this.shuttleRepository.findById(id);

    if (shuttle == null) {
      return this.shuttlePresenter.prepareResourceNotFoundView(
          ShuttleValidator.SHUTTLE_NOT_FOUND_MESSAGE,
          errors
        );
    }

    shuttle =
      this.shuttleFactory.create(
          id,
          dto.getFlightName(),
          dto.getFlightNumber(),
          DateFormatter.parseToDateTime(
            dto.getDate(),
            AppReservation.DATE_TIME_FORMAT
          ),
          dto.getDestination(),
          dto.getState()
        );

    errors = shuttle.validate();

    if (!errors.isEmpty()) {
      return this.shuttlePresenter.prepareInvalidDataView(
          ShuttleValidator.INVALID_DATA_MESSAGE,
          errors
        );
    }

    shuttle = this.shuttleRepository.edit(id, shuttle);

    return this.shuttlePresenter.prepareSuccessView(
        ShuttleResponseDto.from(shuttle)
      );
  }
}
