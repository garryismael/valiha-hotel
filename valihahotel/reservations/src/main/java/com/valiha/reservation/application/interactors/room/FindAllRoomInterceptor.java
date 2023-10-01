package com.valiha.reservation.application.interactors.room;

import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.application.presenter.GenericPresenter;
import com.valiha.reservation.application.repository.GenericRepository;
import com.valiha.reservation.application.useCase.room.RoomFindAllUseCase;
import com.valiha.reservation.core.entities.models.Room;
import java.util.List;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class FindAllRoomInterceptor implements RoomFindAllUseCase {

  private final GenericRepository<Room> roomRepository;
  private final GenericPresenter<RoomResponseDto> roomPresenter;

  @Override
  public List<RoomResponseDto> execute() {
    List<Room> rooms = this.roomRepository.findAll();
    List<RoomResponseDto> responseDtos = RoomResponseDto.fromList(rooms);
    return this.roomPresenter.prepareSuccessView(responseDtos);
  }
}
