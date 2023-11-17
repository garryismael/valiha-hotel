package com.valiha.notification.domain;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Reservation {

  private String id;
  private String checkIn;
  private String checkOut;
  private String state;
  private boolean parking;
  private int pax;
  private Client client;
  private Payment payment;
  private List<Room> rooms;
  private List<Shuttle> shuttles;
  private List<Breakfast> breakfasts;
}
