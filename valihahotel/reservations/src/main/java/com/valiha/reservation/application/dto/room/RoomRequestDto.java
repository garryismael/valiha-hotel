package com.valiha.reservation.application.dto.room;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RoomRequestDto {

  private String title;
  private int price;
  private boolean isAvailable;
  private String categoryId;
}
