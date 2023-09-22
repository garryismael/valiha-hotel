package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.constant.RoomValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Room implements InputValidator {

  private String id;
  private String title;
  private String type;
  private int price;
  private String image;
  private Category category;

  public boolean titleIsValid() {
    return title != null && title.trim().length() > 2;
  }

  public boolean typeIsValid() {
    return type != null && RoomValidator.ROOM_TYPES.contains(type);
  }

  public boolean priceIsValid() {
    return price >= 0;
  }

  public boolean categoryIsValid() {
    return category != null;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();
    if (!titleIsValid()) {
      errors.put(RoomValidator.KEY_TITLE, RoomValidator.INVALID_TITLE);
    }

    if (!typeIsValid()) {
      errors.put(RoomValidator.KEY_TYPE, RoomValidator.INVALID_TYPE);
    }

    if (!priceIsValid()) {
      errors.put(RoomValidator.KEY_PRICE, RoomValidator.INVALID_PRICE);
    }

    if (!categoryIsValid()) {
      errors.put(
        CategoryValidator.KEY_CATEGORY_ID,
        CategoryValidator.CATEGORY_NOT_FOUND_MESSAGE
      );
    }
    return errors;
  }
}
