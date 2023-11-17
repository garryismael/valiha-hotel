package com.valiha.notification.domain;

import lombok.Data;

@Data
public class Room {

  private String id;
  private String title;
  private int price;
  private boolean isAvailable;
  private String image;
  private Category category;
}
