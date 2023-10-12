package com.valiha.reservation.application.dto.reservation;

import com.valiha.reservation.application.dto.breakfast.BreakfastRequestDto;
import com.valiha.reservation.application.dto.client.ClientRequestDto;
import com.valiha.reservation.application.dto.shuttle.ShuttleRequestDto;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationRequestDto {

  private List<String> roomIds;
  private String checkIn;
  private String checkOut;
  private boolean parking;
  private ClientRequestDto client;
  private List<ShuttleRequestDto> shuttles;
  private List<BreakfastRequestDto> breakfasts;

  public static Date convert(String dateString, String pattern) {
    SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
    Date date;
    if (dateString == null) return null;
    try {
      date = dateFormat.parse(dateString);
      return date;
    } catch (ParseException e) {
      return null;
    }
  }
}
