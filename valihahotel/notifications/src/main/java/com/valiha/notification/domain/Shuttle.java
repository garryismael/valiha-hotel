package com.valiha.notification.domain;

import lombok.Data;

@Data
public class Shuttle {

  private String id;
  private String flightName;
  private String flightNumber;
  private String destination;
  private String date;
  private String state;
}
