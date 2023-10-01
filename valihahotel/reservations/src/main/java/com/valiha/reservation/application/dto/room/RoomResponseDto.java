package com.valiha.reservation.application.dto.room;

import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.core.entities.models.Room;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoomResponseDto {

  private String id;
  private String title;
  private int price;
  private String image;
  private CategoryResponseDto category;

  public static RoomResponseDto from(Room room) {
    return RoomResponseDto
      .builder()
      .id(room.getId())
      .title(room.getTitle())
      .price(room.getPrice())
      .image(room.getImage())
      .category(CategoryResponseDto.from(room.getCategory()))
      .build();
  }

  public static List<RoomResponseDto> fromList(List<Room> rooms) {
    return rooms.stream().map(RoomResponseDto::from).toList();
  }
}
