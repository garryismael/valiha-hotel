package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.useCase.room.RoomGetUseCase;
import com.valiha.reservation.core.constant.RoomValidator;
import com.valiha.reservation.core.entities.models.Room;
import java.util.HashMap;
import java.util.Map;

public class FindOneRoomInterceptor implements RoomGetUseCase {

  private final GenericRepository<Room> roomRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  public FindOneRoomInterceptor(
    GenericRepository<Room> roomRepository,
    GenericPresenter<RoomResponseDto> roomPresenter
  ) {
    this.roomRepository = roomRepository;
    this.roomPresenter = roomPresenter;
  }

  @Override
  public RoomResponseDto execute(String id) {
    Map<String, String> errors = new HashMap<String, String>();
    Room room = this.roomRepository.findOneById(id);

    if (room == null) {
      errors.put(
        RoomValidator.KEY_ID,
        String.format(RoomValidator.ROOM_ID_NOT_FOUND, id)
      );
      return this.roomPresenter.prepareResourceNotFoundView(
          RoomValidator.ROOM_NOT_FOUND_MESSAGE,
          errors
        );
    }
    return this.roomPresenter.prepareSuccessView(RoomResponseDto.from(room));
  }
}
