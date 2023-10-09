package com.valiha.reservation.infrastructure.data;

import com.valiha.reservation.core.entities.models.Room;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(value = "rooms")
public class RoomDataMapper {

  @Id
  private String id;

  private String title;
  private int price;
  private String image;

  @DBRef
  private CategoryDataMapper category;

  public static Room cast(RoomDataMapper dataMapper) {
    return Room
      .builder()
      .id(dataMapper.getId())
      .title(dataMapper.getTitle())
      .price(dataMapper.getPrice())
      .image(dataMapper.getImage())
      .category(CategoryDataMapper.toCategory(dataMapper.getCategory()))
      .build();
  }

  public static List<Room> cast(List<RoomDataMapper> dataMappers) {
    return dataMappers.stream().map(RoomDataMapper::cast).toList();
  }

  public static RoomDataMapper from(Room room) {
    return RoomDataMapper
      .builder()
      .id(room.getId())
      .title(room.getTitle())
      .price(room.getPrice())
      .image(room.getImage())
      .category(CategoryDataMapper.from(room.getCategory()))
      .build();
  }

  public static List<RoomDataMapper> from(List<Room> rooms) {
    return rooms.stream().map(RoomDataMapper::from).toList();
  }
}
