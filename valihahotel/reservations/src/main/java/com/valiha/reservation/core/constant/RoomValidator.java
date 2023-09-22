package com.valiha.reservation.core.constant;

import java.util.List;

public class RoomValidator {

  /**
   *
   */
  public static final String KEY_ID = "id";
  /**
   *
   */
  public static final String ROOM_NOT_FOUND_MESSAGE = "Room Not Found";

  /**
   *
   */
  public static final String ROOM_ID_NOT_FOUND = "Room with id %s not found";

  /**
   *
   */
  public static final String KEY_TITLE = "title";
  /**
   *
   */
  public static final String KEY_TYPE = "type";
  /**
   *
   */
  public static final String KEY_PRICE = "price";
  /**
   *
   */
  public static final String KEY_IMAGE = "image";
  /**
   *
   */
  public static final String KEY_CATEGORY = "category";
  /**
   *
   */
  public static final String INVALID_ROOM_DATA_MESSAGE = "Invalid Room Data";
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
  public static final String INVALID_PRICE = "Invalid Price";
  /**
   *
   */
  public static final String INVALID_CATEGORY = "Invalid Category";

  /**
   *
   */
  public static final List<String> ROOM_TYPES = List.of(
    "hotel-with-breakfast",
    "appartement-with-kitchen"
  );

  /**
   *
   */
  public static final String UPLOAD_ERROR = "upload failed";
}
