package com.valiha.users.core.entities.model;

import com.valiha.users.core.constants.UserValidator;
import com.valiha.users.core.interfaces.models.IUser;
import com.valiha.users.core.interfaces.validator.InputValidator;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;

@Getter
public class User implements IUser, InputValidator {

  private String id;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String email;
  private String image;
  private String password;

  public class Builder {

    private final User user;

    public Builder(User user) {
      this.user = user;
    }

    public Builder id(String value) {
      id = value;
      return this;
    }

    public Builder firstName(String value) {
      firstName = value;
      return this;
    }

    public Builder lastName(String value) {
      lastName = value;
      return this;
    }

    public Builder phoneNumber(String value) {
      phoneNumber = value;
      return this;
    }

    public Builder email(String value) {
      email = value;
      return this;
    }

    public Builder image(String value) {
      image = value;
      return this;
    }

    public Builder password(String value) {
      password = value;
      return this;
    }

    public User build() {
      return this.user;
    }
  }

  public static Builder builder() {
    User user = new User();
    return user.new Builder(user);
  }

  @Override
  public boolean passwordIsValid() {
    return this.password != null && this.password.trim().length() >= 8;
  }

  @Override
  public boolean firstNameIsValid() {
    return this.firstName != null && this.firstName.trim().length() > 3;
  }

  @Override
  public boolean lastNameIsValid() {
    return this.lastName == null || this.lastName.trim().length() > 3;
  }

  @Override
  public boolean imageIsValid() {
    return this.image != null;
  }

  @Override
  public boolean phoneNumberIsValid() {
    return this.phoneNumber != null && this.phoneNumber.trim().length() >= 10;
  }

  @Override
  public Map<String, String> validate() {
    Map<String, String> errors = new HashMap<>();

    if (!passwordIsValid()) {
      errors.put(
        UserValidator.KEY_PASSWORD,
        UserValidator.INVALID_PASSWORD_ERROR
      );
    }

    errors.putAll(validateEdit());

    return errors;
  }

  public Map<String, String> validateEdit() {
    Map<String, String> errors = new HashMap<>();

    if (!firstNameIsValid()) {
      errors.put(
        UserValidator.KEY_FIRST_NAME,
        UserValidator.INVALID_FIRST_NAME_ERROR
      );
    }

    if (!lastNameIsValid()) {
      errors.put(
        UserValidator.KEY_LAST_NAME,
        UserValidator.INVALID_FIRST_NAME_ERROR
      );
    }

    if (!phoneNumberIsValid()) {
      errors.put(
        UserValidator.KEY_PHONE_NUMBER,
        UserValidator.INVALID_PHONE_NUMBER_ERROR
      );
    }

    if (!imageIsValid()) {
      errors.put(UserValidator.KEY_IMAGE, UserValidator.INVALID_IMAGE_ERROR);
    }

    return errors;
  }
}
