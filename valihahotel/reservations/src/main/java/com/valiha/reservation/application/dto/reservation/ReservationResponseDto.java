package com.valiha.reservation.application.dto.reservation;

import com.valiha.reservation.application.dto.client.ClientResponseDto;
import com.valiha.reservation.application.dto.payment.PaymentResponseDto;
import com.valiha.reservation.application.dto.room.RoomResponseDto;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.entities.models.Reservation;
import java.text.SimpleDateFormat;
import java.util.Date;
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
  private boolean parking;
  private RoomResponseDto room;
  private ClientResponseDto client;
  private PaymentResponseDto payment;

  public static String dateToString(Date date, String pattern) {
    SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
    return dateFormat.format(date);
  }

  public static ReservationResponseDto from(Reservation reservation) {
    return ReservationResponseDto
      .builder()
      .id(reservation.getId())
      .checkIn(
        dateToString(reservation.getCheckIn(), AppReservation.DATE_FORMAT)
      )
      .checkOut(
        dateToString(reservation.getCheckOut(), AppReservation.DATE_FORMAT)
      )
      .state(reservation.getState())
      .parking(reservation.isParking())
      .room(RoomResponseDto.from(reservation.getRoom()))
      .client(ClientResponseDto.from(reservation.getClient()))
      .payment(PaymentResponseDto.from(reservation.getPayment()))
      .build();
  }
}
