package com.valiha.reservation.application.useCase.room;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import java.io.File;

public interface RoomEditUseCase {
  RoomResponseDto execute(String id, RoomRequestDto requestDto, File file);
}
