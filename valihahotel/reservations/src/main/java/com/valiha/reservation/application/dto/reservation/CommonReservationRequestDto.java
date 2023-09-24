package com.valiha.reservation.application.dto.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommonReservationRequestDto {

  private String roomId;
  private String checkIn;
  private String checkOut;
  private String state;
  private boolean parking;
}
