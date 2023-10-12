package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.core.entities.models.Category;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "categories")
public class CategoryDataMapper {

  @Id
  private String id;

  private String title;
  private String type;
  private int pax;
  private int bigBed;
  private int smallBed;
  private String image;

  public static Category toCategory(CategoryDataMapper dataMapper) {
    return Category
      .builder()
      .id(dataMapper.getId())
      .title(dataMapper.getTitle())
      .type(dataMapper.getType())
      .pax(dataMapper.getPax())
      .bigBed(dataMapper.getBigBed())
      .smallBed(dataMapper.getSmallBed())
      .image(dataMapper.getImage())
      .build();
  }

  public static List<Category> toCategoryList(
    List<CategoryDataMapper> dataMappers
  ) {
    return dataMappers.stream().map(CategoryDataMapper::toCategory).toList();
  }

  public static CategoryDataMapper from(Category category) {
    return CategoryDataMapper
      .builder()
      .id(category.getId())
      .title(category.getTitle())
      .type(category.getType())
      .pax(category.getPax())
      .bigBed(category.getBigBed())
      .smallBed(category.getSmallBed())
      .image(category.getImage())
      .build();
  }
}
