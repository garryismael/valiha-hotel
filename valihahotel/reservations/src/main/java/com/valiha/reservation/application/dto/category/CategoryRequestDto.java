package com.valiha.reservation.application.dto.category;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryRequestDto {

  private String title;
  private int adult;
  private int kid;
  private int bigBed;
  private int smallBed;
}
