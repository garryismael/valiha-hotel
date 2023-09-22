package com.valiha.users.core.constants;

public class UserValidator {

  // Contact attribute keys
  public static final String KEY_ID = "id";
  public static final String KEY_FIRST_NAME = "firstName";
  public static final String KEY_LAST_NAME = "lastName";
  public static final String KEY_PHONE_NUMBER = "phoneNumber";
  public static final String KEY_EMAIL = "email";
  public static final String KEY_PASSWORD = "password";

  // Contact Invalid Attribute Error Message
  public static final String INVALID_FIRST_NAME_ERROR = "first name invalid";
  public static final String INVALID_LAST_NAME_ERROR = "last name invalid";
  public static final String INVALID_PHONE_NUMBER_ERROR =
    "phone number invalid";
  public static final String INVALID_EMAIL_ERROR = "email invalid";
  public static final String EMAIL_EXISTS_ERROR = "email exists";
  public static final String INVALID_PASSWORD_ERROR = "email invalid";

  // Contact Error Message
  public static final String USER_NOT_FOUND_ERROR = "user not found";
  public static final String INVALID_DATA_MESSAGE = "user data invalid";
}
