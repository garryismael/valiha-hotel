package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.constant.RoomValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Room implements InputValidator {

  private String id;
  private String title;
  private int price;
  private String image;
  private Category category;

  public class Builder {

    private final Room room;

    public Builder(Room room) {
      this.room = room;
    }

    public Builder id(String id) {
      this.room.id = id;
      return this;
    }

    public Builder title(String title) {
      this.room.title = title;
      return this;
    }

    public Builder price(int price) {
      this.room.price = price;
      return this;
    }

    public Builder image(String image) {
      this.room.image = image;
      return this;
    }

    public Builder category(Category category) {
      this.room.category = category;
      return this;
    }

    public Room build() {
      return this.room;
    }
  }

  public static Builder builder() {
    Room room = new Room();
    return room.new Builder(room);
  }

  public boolean titleIsValid() {
    return title != null && title.trim().length() > 2;
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
