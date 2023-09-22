package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.useCase.room.RoomCreateUseCase;
import com.valiha.reservation.core.constant.RoomValidator;
import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.RoomFactory;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class CreateRoomInteractor implements RoomCreateUseCase {

  private final RoomFactory roomFactory;
  private final GenericRepository<Room> roomRepository;
  private final GenericRepository<Category> categoryRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  public CreateRoomInteractor(
    RoomFactory roomFactory,
    GenericRepository<Room> roomRepository,
    GenericRepository<Category> categoryRepository,
    GenericPresenter<RoomResponseDto> roomPresenter
  ) {
    this.roomFactory = roomFactory;
    this.roomRepository = roomRepository;
    this.categoryRepository = categoryRepository;
    this.roomPresenter = roomPresenter;
  }

  @Override
  public RoomResponseDto execute(RoomRequestDto requestDto, File image) {
    Map<String, String> errors = new HashMap<String, String>();

    String categoryId = requestDto.getCategoryId();
    Category category = categoryId != null
      ? this.categoryRepository.findOneById(categoryId)
      : null;

    Room room =
      this.roomFactory.create(
          requestDto.getTitle(),
          requestDto.getType(),
          requestDto.getPrice(),
          image.getName(),
          category
        );

    errors = room.validate();

    if (!errors.isEmpty()) {
      return this.roomPresenter.prepareInvalidDataView(
          RoomValidator.INVALID_ROOM_DATA_MESSAGE,
          errors
        );
    }

    room = this.roomRepository.create(room);

    return this.roomPresenter.prepareSuccessView(RoomResponseDto.from(room));
  }
}
