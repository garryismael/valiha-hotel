package com.valiha.reservation.application.dto.category;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryRequestDto {

  private String title;
  private String type;
  private int pax;
  private int bigBed;
  private int smallBed;
}
