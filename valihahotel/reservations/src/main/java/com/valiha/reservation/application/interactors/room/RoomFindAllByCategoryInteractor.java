package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.RoomRepository;
import com.valiha.reservation.application.useCase.room.RoomFindAllByCategoryUseCase;
import com.valiha.reservation.core.entities.models.Room;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class RoomFindAllByCategoryInteractor
  implements RoomFindAllByCategoryUseCase {

  private final RoomRepository roomRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  @Override
  public List<RoomResponseDto> execute(String id) {
    List<Room> rooms = this.roomRepository.findAllByCategory(id);
    List<RoomResponseDto> responseDtos = RoomResponseDto.fromList(rooms);
    return this.roomPresenter.prepareSuccessView(responseDtos);
  }
}
