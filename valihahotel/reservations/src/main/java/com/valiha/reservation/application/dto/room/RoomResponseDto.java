package com.valiha.reservation.application.dto.room;

import com.valiha.reservation.application.dto.category.CategoryResponseDto;
import com.valiha.reservation.core.entities.models.Room;
import com.valiha.reservation.infrastructure.config.ReservationData;
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
  private boolean isAvailable;
  private String image;
  private CategoryResponseDto category;

  public static RoomResponseDto from(Room room) {
    return RoomResponseDto
      .builder()
      .id(room.getId())
      .title(room.getTitle())
      .price(room.getPrice())
      .isAvailable(room.isAvailable())
      .image(String.format("%s/%s", ReservationData.BASE_URL, room.getImage()))
      .category(CategoryResponseDto.from(room.getCategory()))
      .build();
  }

  public static List<RoomResponseDto> from(List<Room> rooms) {
    return rooms.stream().map(RoomResponseDto::from).toList();
  }

  public static List<RoomResponseDto> fromList(List<Room> rooms) {
    return rooms.stream().map(RoomResponseDto::from).toList();
  }
}
