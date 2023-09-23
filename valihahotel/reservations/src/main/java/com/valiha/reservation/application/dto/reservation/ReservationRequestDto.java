package com.valiha.reservation.application.dto.reservation;

import com.valiha.reservation.application.dto.client.ClientRequestDto;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
  private boolean parking;
  private ClientRequestDto client;

  public static Date convert(String dateString, String pattern) {
    SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
    Date date;
    try {
      date = dateFormat.parse(dateString);
      return date;
    } catch (ParseException e) {
      return null;
    }
  }
}
