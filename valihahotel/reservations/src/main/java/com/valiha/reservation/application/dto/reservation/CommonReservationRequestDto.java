package com.valiha.reservation.application.dto.reservation;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommonReservationRequestDto {

  private List<String> roomIds;
  private String checkIn;
  private String checkOut;
  private String state;
  private boolean parking;
  private int pax;
}
