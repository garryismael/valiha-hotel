package com.valiha.location.application.dto.location;

import lombok.Getter;

@Getter
public class CommonLocationRequestDto {

  private String state;
  private String start;
  private String end;
  private String destination;
  private String reason;
  private String carId;
}
