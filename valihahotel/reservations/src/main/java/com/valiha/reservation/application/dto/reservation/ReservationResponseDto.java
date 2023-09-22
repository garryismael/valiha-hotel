package com.valiha.reservation.application.dto.reservation;

import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReservationResponseDto {

  private String id;
  private String checkIn;
  private String checkOut;
  private String state;
  private boolean useParking;
  private RoomResponseDto room;
  private ClientResponseDto client;
  private PaymentResponseDto payment;
}
