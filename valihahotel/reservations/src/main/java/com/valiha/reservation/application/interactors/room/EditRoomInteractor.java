package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.service.StorageService;
import com.valiha.reservation.application.useCase.room.RoomEditUseCase;
import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.constant.RoomValidator;
import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.RoomFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class EditRoomInteractor implements RoomEditUseCase {

  private final RoomFactory roomFactory;
  private final GenericRepository<Room> roomRepository;
  private final GenericRepository<Category> categoryRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;
  private final StorageService storageService;

  public EditRoomInteractor(
    RoomFactory roomFactory,
    GenericRepository<Room> roomRepository,
    GenericRepository<Category> categoryRepository,
    GenericPresenter<RoomResponseDto> roomPresenter,
    StorageService storageService
  ) {
    this.roomFactory = roomFactory;
    this.roomRepository = roomRepository;
    this.categoryRepository = categoryRepository;
    this.roomPresenter = roomPresenter;
    this.storageService = storageService;
  }

  @Override
  public RoomResponseDto execute(
    String id,
    RoomRequestDto requestDto,
    File file
  ) {
    Map<String, String> errors = new HashMap<String, String>();
    Room room = this.roomRepository.findOneById(id);
    String image = null;

    if (room == null) {
      errors.put(
        RoomValidator.KEY_ID,
        String.format(RoomValidator.ROOM_ID_NOT_FOUND, id)
      );
      return roomPresenter.prepareResourceNotFoundView(
        RoomValidator.ROOM_NOT_FOUND_MESSAGE,
        errors
      );
    }

    String categoryId = requestDto.getCategoryId();
    Category category = categoryId != null
      ? this.categoryRepository.findOneById(categoryId)
      : null;

    if (category == null) {
      errors.put(
        CategoryValidator.KEY_ID,
        String.format(CategoryValidator.CATEGORY_ID_NOT_FOUND, id)
      );
    }

    if (file != null) {
      try {
        image = this.storageService.upload(file, "rooms");
      } catch (IOException exception) {
        errors.put(RoomValidator.KEY_IMAGE, RoomValidator.UPLOAD_ERROR);
      }
    } else {
      image = room.getImage();
    }

    room =
      this.roomFactory.create(
          id,
          requestDto.getTitle(),
          requestDto.getType(),
          requestDto.getPrice(),
          image,
          category
        );

    errors.putAll(room.validate());

    if (!errors.isEmpty()) {
      return this.roomPresenter.prepareInvalidDataView(
          RoomValidator.INVALID_ROOM_DATA_MESSAGE,
          errors
        );
    }

    room = this.roomRepository.save(room);

    return this.roomPresenter.prepareSuccessView(RoomResponseDto.from(room));
  }
}
