package com.valiha.reservation.application.dto.shuttle;

import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.entities.models.Shuttle;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ShuttleResponseDto {

  private String id;
  private String flightName;
  private String flightNumber;
  private String destination;
  private String date;

  public static final ShuttleResponseDto from(Shuttle shuttle) {
    return ShuttleResponseDto
      .builder()
      .id(shuttle.getId())
      .flightName(shuttle.getFlightName())
      .flightNumber(shuttle.getFlightNumber())
      .destination(shuttle.getDestination())
      .date(
        DateFormatter.parse(shuttle.getDate(), AppReservation.DATE_TIME_FORMAT)
      )
      .build();
  }

  public static final List<ShuttleResponseDto> from(List<Shuttle> shuttles) {
    return shuttles.stream().map(ShuttleResponseDto::from).toList();
  }
}
