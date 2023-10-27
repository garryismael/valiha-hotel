package com.valiha.reservation.application.dto.room;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AvailableRoomRequestDto {

  private String checkIn;
  private String checkOut;
}
