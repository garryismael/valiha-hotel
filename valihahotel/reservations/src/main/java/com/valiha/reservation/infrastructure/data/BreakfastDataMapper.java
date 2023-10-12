package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.core.entities.models.Breakfast;
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

  public static Breakfast cast(BreakfastDataMapper dataMapper) {
    return Breakfast.builder().id(dataMapper.id).date(dataMapper.date).build();
  }

  public static List<Breakfast> cast(List<BreakfastDataMapper> dataMappers) {
    return dataMappers.stream().map(BreakfastDataMapper::cast).toList();
  }
}
