package com.valiha.reservation.application.dto.category;

import com.valiha.reservation.core.entities.models.Category;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryResponseDto {

  private String id;
  private String title;
  private int adult;
  private int kid;
  private int bigBed;
  private int smallBed;
  private String image;

  public static CategoryResponseDto from(Category category) {
    return CategoryResponseDto
      .builder()
      .id(category.getId())
      .title(category.getTitle())
      .adult(category.getAdult())
      .kid(category.getKid())
      .bigBed(category.getBigBed())
      .smallBed(category.getSmallBed())
      .image(category.getImage())
      .build();
  }

  public static List<CategoryResponseDto> from(List<Category> categories) {
    return categories.stream().map(CategoryResponseDto::from).toList();
  }
}
