package com.valiha.reservation.infrastructure.data;

import java.time.LocalDateTime;
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
public class Shuttle {

  private String id;
  private String flightName;
  private String flightNumber;
  private String destination;
  private LocalDateTime date;
}
