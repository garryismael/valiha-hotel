package com.valiha.reservation.application.useCase.room;

import com.valiha.reservation.application.dto.room.RoomRequestDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import java.io.File;

public interface RoomCreateUseCase {
  RoomResponseDto execute(RoomRequestDto requestDto, File image);
}
