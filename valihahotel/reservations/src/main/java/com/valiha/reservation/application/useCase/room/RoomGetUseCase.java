package com.valiha.reservation.application.useCase.room;

import com.valiha.reservation.application.dto.room.RoomResponseDto;

public interface RoomGetUseCase {
  RoomResponseDto execute(String id);
}
