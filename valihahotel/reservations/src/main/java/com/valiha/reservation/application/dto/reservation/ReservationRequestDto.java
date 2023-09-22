package com.valiha.reservation.application.dto.reservation;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationRequestDto {

  private String roomId;
  private String checkIn;
  private String checkOut;
  private String useParking;
  private ClientRequestDto client;
}
