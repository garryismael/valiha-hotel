package com.valiha.location.application.dto.location;

import com.valiha.location.application.dto.car.CarResponseDto;
import com.valiha.location.application.dto.client.ClientResponseDto;
import com.valiha.location.application.dto.payment.PaymentResponseDto;
import com.valiha.location.core.constants.AppLocation;
import com.valiha.location.core.entities.models.Location;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LocationResponseDto {

  private String id;
  private String state;
  private String start;
  private String end;
  private String destination;
  private String reason;
  private ClientResponseDto client;
  private CarResponseDto car;
  private PaymentResponseDto payment;

  public static LocationResponseDto from(Location location) {
    return LocationResponseDto
      .builder()
      .id(location.getId())
      .state(location.getState())
      .start(dateToString(location.getStart(), AppLocation.DATE_FORMAT))
      .end(dateToString(location.getEnd(), AppLocation.DATE_FORMAT))
      .destination(location.getDestination())
      .reason(location.getReason())
      .client(ClientResponseDto.from(location.getClient()))
      .car(CarResponseDto.from(location.getCar()))
      .payment(PaymentResponseDto.from(location.getPayment()))
      .build();
  }

  public static List<LocationResponseDto> from(List<Location> locations) {
    return locations.stream().map(LocationResponseDto::from).toList();
  }

  public static String dateToString(Date date, String pattern) {
    SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
    return dateFormat.format(date);
  }
}
