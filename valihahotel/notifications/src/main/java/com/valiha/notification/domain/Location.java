package com.valiha.notification.domain;

import java.util.List;
import lombok.Data;

@Data
public class Location {

  private String id;
  private String state;
  private String start;
  private String end;
  private String destination;
  private String reason;
  private Client client;
  private List<Car> cars;
  private Payment payment;
}
