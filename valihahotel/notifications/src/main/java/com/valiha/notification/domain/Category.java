package com.valiha.notification.domain;

import lombok.Data;

@Data
public class Category {

  private String id;
  private String title;
  private String type;
  private int pax;
  private int bigBed;
  private int smallBed;
  private String image;
}
