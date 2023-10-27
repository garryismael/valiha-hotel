package com.valiha.location.application.dto.location;

import com.valiha.location.application.dto.client.ClientRequestDto;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import lombok.Getter;

@Getter
public class LocationRequestDto {

  private String start;
  private String end;
  private String destination;
  private String reason;
  private ClientRequestDto client;
  private String carId;

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
