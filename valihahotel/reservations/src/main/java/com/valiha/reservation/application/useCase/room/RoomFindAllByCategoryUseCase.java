package com.valiha.reservation.application.useCase.room;

import com.valiha.reservation.application.dto.room.RoomResponseDto;
import java.util.List;

public interface RoomFindAllByCategoryUseCase {
  List<RoomResponseDto> execute(String id);
}
