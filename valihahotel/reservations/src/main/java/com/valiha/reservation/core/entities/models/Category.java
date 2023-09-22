package com.valiha.reservation.core.entities.models;

import com.valiha.reservation.core.constant.CategoryValidator;
import com.valiha.reservation.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category implements InputValidator {

  private String id;
  private String title;
  private int adult;
  private int kid;
  private int bigBed;
  private int smallBed;
  private String image;

  public boolean titleIsValid() {
    return title != null && title.trim().length() > 3;
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
