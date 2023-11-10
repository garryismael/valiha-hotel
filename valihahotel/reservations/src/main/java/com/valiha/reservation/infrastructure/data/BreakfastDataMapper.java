package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.core.entities.models.Breakfast;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "breakfasts")
public class BreakfastDataMapper {

  private String id;
  private Date date;
  private String state;

  public static Breakfast cast(BreakfastDataMapper dataMapper) {
    return Breakfast
      .builder()
      .id(dataMapper.id)
      .date(dataMapper.date)
      .state(dataMapper.state)
      .build();
  }

  public static BreakfastDataMapper from(Breakfast breakfast) {
    return BreakfastDataMapper
      .builder()
      .id(breakfast.getId())
      .date(breakfast.getDate())
      .state(breakfast.getState())
      .build();
  }

  public static List<BreakfastDataMapper> from(List<Breakfast> breakfast) {
    return breakfast.stream().map(BreakfastDataMapper::from).toList();
  }

  public static List<Breakfast> cast(List<BreakfastDataMapper> dataMappers) {
    if (dataMappers == null) return new ArrayList<>() {};
    return dataMappers.stream().map(BreakfastDataMapper::cast).toList();
  }
}
