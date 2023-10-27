package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.core.entities.models.Shuttle;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "shuttles")
public class ShuttleDataMapper {

  private String id;
  private String flightName;
  private String flightNumber;
  private String destination;
  private LocalDateTime date;

  public static Shuttle cast(ShuttleDataMapper shuttle) {
    return Shuttle
      .builder()
      .id(shuttle.id)
      .flightName(shuttle.flightName)
      .flightNumber(shuttle.flightNumber)
      .destination(shuttle.destination)
      .date(shuttle.date)
      .build();
  }

  public static List<Shuttle> cast(List<ShuttleDataMapper> shuttles) {
    if (shuttles == null) return new ArrayList<>() {};
    return shuttles.stream().map(ShuttleDataMapper::cast).toList();
  }
}
