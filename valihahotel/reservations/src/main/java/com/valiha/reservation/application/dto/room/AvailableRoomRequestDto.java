package com.valiha.reservation.application.dto.room;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AvailableRoomRequestDto {

  private String categoryType;
  private String checkIn;
  private String checkOut;
  private int adult;
  private int kid;
  private int room;
}
