package com.valiha.reservation.application.dto.breakfast;

import com.valiha.reservation.application.utils.DateFormatter;
import com.valiha.reservation.core.constant.AppReservation;
import com.valiha.reservation.core.entities.models.Breakfast;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BreakfastResponseDto {

  String id;
  String date;
  String state;

  public static BreakfastResponseDto from(Breakfast breakfast) {
    return BreakfastResponseDto
      .builder()
      .id(breakfast.getId())
      .date(
        DateFormatter.parse(breakfast.getDate(), AppReservation.DATE_FORMAT)
      )
      .state(breakfast.getState())
      .build();
  }

  public static List<BreakfastResponseDto> from(List<Breakfast> breakfasts) {
    return breakfasts.stream().map(BreakfastResponseDto::from).toList();
  }
}
