package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class Category implements InputValidator {

  private String id;
  private String title;
  private String type;
  private int adult;
  private int kid;
  private int bigBed;
  private int smallBed;
  private String image;

  public class Builder {

    private final Category category;

    public Builder(Category category) {
      this.category = category;
    }

    public Builder id(String id) {
      this.category.id = id;
      return this;
    }

    public Builder title(String title) {
      this.category.title = title;
      return this;
    }

    public Builder type(String type) {
      this.category.type = type;
      return this;
    }

    public Builder adult(int adult) {
      this.category.adult = adult;
      return this;
    }

    public Builder kid(int kid) {
      this.category.kid = kid;
      return this;
    }

    public Builder bigBed(int bigBed) {
      this.category.bigBed = bigBed;
      return this;
    }

    public Builder smallBed(int smallBed) {
      this.category.smallBed = smallBed;
      return this;
    }

    public Builder image(String image) {
      this.category.image = image;
      return this;
    }

    public Category build() {
      return this.category;
    }
  }

  public static Builder builder() {
    Category category = new Category();
    return category.new Builder(category);
  }

  public boolean titleIsValid() {
    return title != null && title.trim().length() > 3;
  }

  public boolean typeIsValid() {
    return type != null && CategoryValidator.ROOM_TYPES.contains(type);
  }

  public boolean adultIsValid() {
    return adult > 0;
  }

  public boolean kidIsValid() {
    return kid >= 0;
  }

  public boolean bigBedIsValid() {
    return bigBed >= 0;
  }

  public boolean smallBedIsValid() {
    return smallBed >= 0;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!titleIsValid()) {
      errors.put(CategoryValidator.KEY_TITLE, CategoryValidator.INVALID_TITLE);
    }

    if (!typeIsValid()) {
      errors.put(CategoryValidator.KEY_TYPE, CategoryValidator.INVALID_TYPE);
    }

    if (!adultIsValid()) {
      errors.put(CategoryValidator.KEY_ADULT, CategoryValidator.INVALID_ADULT);
    }

    if (!kidIsValid()) {
      errors.put(CategoryValidator.KEY_KID, CategoryValidator.INVALID_KID);
    }

    if (!bigBedIsValid()) {
      errors.put(
        CategoryValidator.KEY_BIG_BED,
        CategoryValidator.INVALID_BIG_BED
      );
    }

    if (!smallBedIsValid()) {
      errors.put(
        CategoryValidator.KEY_SMALL_BED,
        CategoryValidator.INVALID_SMALL_BED
      );
    }
    return errors;
  }
}
