package com.valiha.reservation.application.dto.shuttle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ShuttleBaseRequestDto {

  private String flightName;
  private String flightNumber;
  private String destination;
  private String date;
}
