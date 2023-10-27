package com.valiha.reservation.core.constant;

import java.util.List;

public class CategoryValidator {

  /**
   *
   */
  public static final String KEY_ID = "id";
  /**
   *
   */
  public static final String KEY_IMAGE = "image";
  /**
   *
   */
  public static final String KEY_CATEGORY_ID = "categoryId";
  /**
   *
   */
  public static final String CATEGORY_NOT_FOUND_MESSAGE = "Category Not Found";
  /**
   *
   */
  public static final String KEY_TYPE = "type";

  /**
   *
   */
  public static final String CATEGORY_ID_NOT_FOUND =
    "Category with id %s not found";

  /**
   *
   */
  public static final String INVALID_TITLE = "invalid title";
  /**
   *
   */
  public static final String INVALID_TYPE = "Invalid Type";
  /**
   *
   */
  public static final String KEY_SMALL_BED = "smallBed";
  /**
   *
   */
  public static final String KEY_BIG_BED = "bigBed";
  /**
   *
   */
  public static final String KEY_PAX = "pax";
  /**
   *
   */
  public static final String KEY_TITLE = "title";
  /**
   *
   */
  public static final String INVALID_CATEGORY_DATA_MESSAGE =
    "Invalid Category Data";
  /**
   *
   */
  public static final String INVALID_SMALL_BED = "Invalid Small Bed";
  /**
   *
   */
  public static final String INVALID_BIG_BED = "Invalid Big Bed";
  /**
   *
   */
  public static final String INVALID_PAX = "Pax Invalid";
  /**
   *
   */
  public static final String UPLOAD_ERROR = "upload failed";

  /**
   *
   */
  public static final List<String> ROOM_TYPES = List.of(
    "hotel-with-breakfast",
    "apartment-with-kitchen"
  );
}
