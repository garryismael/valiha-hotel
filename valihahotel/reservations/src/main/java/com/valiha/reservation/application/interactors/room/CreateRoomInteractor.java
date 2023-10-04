package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.CategoryRepository;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.application.useCase.room.RoomCreateUseCase;
import com.valiha.reservation.core.constant.RoomValidator;
import com.valiha.reservation.core.entities.models.Category;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.core.interfaces.factory.RoomFactory;
import java.io.File;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateRoomInteractor implements RoomCreateUseCase {

  private final RoomFactory roomFactory;
  private final RoomRepository roomRepository;
  private final CategoryRepository categoryRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  @Override
  public RoomResponseDto execute(RoomRequestDto requestDto, File image) {
    Map<String, String> errors = new HashMap<String, String>();

    String categoryId = requestDto.getCategoryId();
    Category category = categoryId != null
      ? this.categoryRepository.findOneById(categoryId)
      : null;

    Room room =
      this.roomFactory.create(
          null,
          requestDto.getTitle(),
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

    room = this.roomRepository.save(room);

    return this.roomPresenter.prepareSuccessView(RoomResponseDto.from(room));
  }
}
